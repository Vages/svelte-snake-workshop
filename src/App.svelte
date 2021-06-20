<script>
  import { onDestroy } from "svelte";
  import { fly, scale } from "svelte/transition";
  import cssVars from "svelte-css-vars";

  import GameOverModal from "./GameOverModal.svelte";
  import {
    DIRECTION_VECTORS,
    getNewApplePosition,
    getNewDirectionFromEventKey,
    getNextSnake,
    is180Turn,
    isEqual,
    isInsideBoard,
    isSnakeEatingItself,
  } from "./utils";
  import NesContainer from "./NesContainer.svelte";
  import StartModal from "./StartModal.svelte";

  const TICK_TIME = 100;
  const BOARD_DIMENSIONS = { x: 20, y: 20 };

  const GAME_STATES = Object.freeze({
    START_SCREEN: "START_SCREEN",
    PLAYING: "PLAYING",
    PAUSED: "PAUSED",
    GAME_OVER: "GAME_OVER",
  });

  // Letting the state variables go uninitialized is safe,
  // because they are initialized by resetGame before they are ever read
  let apple;
  let gameState;
  let headDirection;
  let score;
  let snake;
  let willGrow;
  function resetGame() {
    const initialSnake = [
      { x: 4, y: 4 },
      { x: 4, y: 3 },
      { x: 4, y: 2 },
    ];
    apple = getNewApplePosition(BOARD_DIMENSIONS, initialSnake);
    gameState = GAME_STATES.START_SCREEN;
    headDirection = "SOUTH";
    score = 0;
    snake = initialSnake;
    willGrow = false;
  }
  resetGame();

  // Snake logic
  function moveSnake() {
    snake = getNextSnake(snake, DIRECTION_VECTORS[headDirection], willGrow);
    willGrow = false;
  }

  $: if (
    !isInsideBoard(BOARD_DIMENSIONS, snake[0]) ||
    isSnakeEatingItself(snake)
  ) {
    gameState = GAME_STATES.GAME_OVER;
  }

  // Apple logic
  $: if (isEqual(snake[0], apple)) {
    eatApple();
  }

  function eatApple() {
    score += 1;
    willGrow = true;
    apple = getNewApplePosition(BOARD_DIMENSIONS, snake);
  }

  // User interaction
  function handleKeydown(event) {
    if (gameState === GAME_STATES.START_SCREEN) {
      gameState = GAME_STATES.PLAYING;
      return;
    }
    if (gameState === GAME_STATES.PAUSED) {
      if (event.key === " ") {
        gameState = GAME_STATES.PLAYING;
      }
      return;
    }
    if (gameState === GAME_STATES.PLAYING) {
      if (event.key === " ") {
        gameState = GAME_STATES.PAUSED;
      }
      const keyDirection = getNewDirectionFromEventKey(event.key);
      if (!keyDirection) {
        return;
      }

      if (!is180Turn(snake, keyDirection)) {
        headDirection = keyDirection;
      }
    }
  }

  // Starting and stopping gameplay
  let stopTicking = () => {};
  const startTicking = () => {
    const id = setInterval(moveSnake, TICK_TIME);
    stopTicking = () => clearInterval(id);
    return () => clearInterval(id);
  };

  // Reacting to changed states
  $: handleStateChange(gameState);
  // Extracting it as a separate function to avoid it being called when variables other than gameState
  // are reassigned, namely stopTicking, which is reassigned on startTicking
  function handleStateChange(newState) {
    if (newState === GAME_STATES.START_SCREEN) {
      resetGame();
    } else if (newState === GAME_STATES.PLAYING) {
      startTicking();
    } else if (newState === GAME_STATES.PAUSED) {
      stopTicking();
    } else if (newState === GAME_STATES.GAME_OVER) {
      stopTicking();
    }
  }

  // Stop calling functions in intervals when the functions stop existing (i.e. when the component unmounts)
  onDestroy(stopTicking);

  const CELL_SIZE = 25;

  // Styling
  function calculatePositionAsStyle(coordinate) {
    return `left: ${coordinate.x * CELL_SIZE}px; top: ${
      coordinate.y * CELL_SIZE
    }px`;
  }

  $: styleVars = {
    "cell-size": `${CELL_SIZE}px`,
    "tick-time": `${TICK_TIME}ms`,
  };

  $: gameOver = gameState === GAME_STATES.GAME_OVER;

</script>

<style>
  .modal-container {
    position: absolute;
    left: 50%;
    top: 2rem;
  }

  .min-width {
    width: min-content;
  }

  .main-content {
    margin: 1rem auto 0 auto;
    display: grid;
    grid-template-columns: auto;
    gap: 2rem;
    align-items: center;
    text-align: center;
  }

  .score {
    justify-self: right;
  }
  .signature {
    font-size: 0.5rem;
  }

  .signature img {
    height: 2em;
    margin-right: -0.5em;
    margin-top: -0.25em;
  }

  :root {
    --checker-color: #f0f0f0;
  }

  .body-part,
  .skull,
  .apple {
    position: absolute;
    width: var(--cell-size);
    height: var(--cell-size);
    text-align: center;
    line-height: 1;
  }

  .body-part {
    background-color: green;
  }

  .head {
    transform: scale(1.3);
  }

  .head,
  .tail {
    transition: top var(--tick-time) linear, left var(--tick-time) linear;
  }

  .apple::before {
    content: "🍎";
    font-size: calc(var(--cell-size) * 0.8);
  }

  .skull::before {
    content: "☠️";
    overflow: hidden;
  }

  .skull {
    /* Transform cannot be applied to a before element, so we must apply it here */
    transform: scale(3, 3) translateY(4px);
    transform-origin: 50% 50%;
  }

  .board {
    --border-width: var(--cell-size);

    position: relative;
    margin: var(--border-width);
    outline: var(--border-width) solid black;

    background-image: linear-gradient(
        45deg,
        var(--checker-color) 25%,
        transparent 25%
      ),
      linear-gradient(-45deg, var(--checker-color) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--checker-color) 75%),
      linear-gradient(-45deg, transparent 75%, var(--checker-color) 75%);
    background-size: calc(var(--cell-size) * 2) calc(var(--cell-size) * 2);
    background-position: 0 0, 0 var(--cell-size),
      var(--cell-size) calc(-1 * var(--cell-size)),
      calc(-1 * var(--cell-size)) 0;
  }

</style>

<svelte:options immutable={true} />

<svelte:body on:keydown={handleKeydown} />

<div use:cssVars={styleVars} class="main-content min-width">
  <div class="score">{score}</div>

  <div
    class="board"
    style="width: {BOARD_DIMENSIONS.x * CELL_SIZE}px; height: {BOARD_DIMENSIONS.y * CELL_SIZE}px">
    {#each snake.slice(1) as bodyPart}
      <div class="body-part" style={calculatePositionAsStyle(bodyPart)} />
    {/each}
    <div class="body-part head" style={calculatePositionAsStyle(snake[0])} />
    <div
      class="body-part tail"
      style={calculatePositionAsStyle(snake[snake.length - 1])} />
    <!-- This extra tail is added to compensate for tail flickering in Chrome and Safari -->
    <div
      class="body-part tail"
      style={calculatePositionAsStyle(snake[snake.length - 2])} />

    {#key score}
      <div in:scale style={calculatePositionAsStyle(apple)} class="apple" />
    {/key}

    {#if gameOver}
      <div
        in:scale={{ delay: 300 }}
        style={calculatePositionAsStyle(snake[0])}
        class="skull" />
    {/if}
  </div>

  <div class="signature">
    <p>
      Made with
      <a href="https://svelte.dev/">
        <img alt="Svelte logo" src="/svelte.png" />
        Svelte
      </a>
      in the
      <a href="https://github.com/Vages/svelte-snake-workshop">
        Svelte Snake Workshop
      </a>
    </p>
  </div>
</div>

{#if gameState === GAME_STATES.START_SCREEN}
  <div class="modal-container" out:fly={{ y: -100 }}>
    <!-- This div, together with the class modal-container is required to center the content -->
    <div style="position: relative; left: -50%;">
      <StartModal />
    </div>
  </div>
{/if}

{#if gameState === GAME_STATES.PAUSED}
  <div class="modal-container" transition:fly={{ y: -100 }}>
    <!-- This div, together with the class modal-container is required to center the content -->
    <div style="position: relative; left: -50%;">
      <NesContainer>
        <h2>Pause</h2>
        Space to resume
      </NesContainer>
    </div>
  </div>
{/if}

{#if gameState === GAME_STATES.GAME_OVER}
  <div class="modal-container" in:fly={{ delay: 1300, y: -100 }}>
    <!-- This div, together with the class modal-container is required to center the content -->
    <div style="position: relative; left: -50%;">
      <GameOverModal
        on:close_modal={() => {
          gameState = GAME_STATES.START_SCREEN;
        }}
        {score} />
    </div>
  </div>
{/if}
