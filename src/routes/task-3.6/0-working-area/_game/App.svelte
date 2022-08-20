<script>
  import { onMount } from "svelte";

  import {
    DIRECTION,
    DIRECTION_TO_VECTOR,
    arePerpendicular,
    convertKeyboardKeyToDirection,
    getNextSnake,
    isEqual,
    isInsideBoard,
    isSnakeEatingItself,
    pickRandomOpenSpace,
  } from "./utils";

  const TICK_TIME = 100;
  const BOARD_DIMENSIONS = { x: 20, y: 20 };

  let snake = [
    { x: 4, y: 4 },
    { x: 4, y: 3 },
    { x: 4, y: 2 },
  ];
  let apple = pickRandomOpenSpace(BOARD_DIMENSIONS, snake);
  let gameOver = false;
  let headDirection = DIRECTION.SOUTH;
  let headDirectionQueue = [];
  let score = 0;
  let willGrow = false;

  function moveSnake() {
    snake = getNextSnake(snake, DIRECTION_TO_VECTOR[headDirection], willGrow);
    willGrow = false;
  }

  $: if (
    !isInsideBoard(BOARD_DIMENSIONS, snake[0]) ||
    isSnakeEatingItself(snake)
  ) {
    gameOver = true;
  }

  $: if (isEqual(snake[0], apple)) {
    score += 1;
    willGrow = true;
    apple = pickRandomOpenSpace(BOARD_DIMENSIONS, snake);
  }

  function handleKeydown(event) {
    const keyDirection = convertKeyboardKeyToDirection(event.key);
    if (!keyDirection) {
      return;
    }
    if (arePerpendicular(keyDirection, headDirection)) {
      headDirection = keyDirection;
    }
  }

  let stopTicking = () => {};
  onMount(() => {
    const id = setInterval(moveSnake, TICK_TIME);
    stopTicking = () => clearInterval(id);
    return () => clearInterval(id);
  });

  $: if (gameOver) {
    stopTicking();
  }

  const CELL_SIZE = 25;

  function calculatePositionAsStyle(coordinate) {
    return `left: ${coordinate.x * CELL_SIZE}px; top: ${
      coordinate.y * CELL_SIZE
    }px`;
  }
</script>

<svelte:body on:keydown={handleKeydown} />

<div
  class="main-content min-width"
  style="--cell-size: {CELL_SIZE}px; --tick-time: {TICK_TIME}ms; --board-size-x: {BOARD_DIMENSIONS.x}; --board-size-y: {BOARD_DIMENSIONS.y}"
>
  <div class="score">{score}</div>

  <div class="board">
    {#each snake as bodyPart}
      <div class="body-part" style={calculatePositionAsStyle(bodyPart)} />
    {/each}

    <div style={calculatePositionAsStyle(apple)} class="apple" />
  </div>
</div>

<style>
  :root {
    --checker-color: #f0f0f0;
  }

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
    width: calc(var(--board-size-x) * var(--cell-size));
    height: calc(var(--board-size-y) * var(--cell-size));

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
