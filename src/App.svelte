<script>
  const TICK_TIME = 100;
  const BOARD_DIMENSIONS = { x: 20, y: 20 };

  // eslint-disable-next-line no-unused-vars
  let snake = [
    { x: 4, y: 4 },
    { x: 4, y: 3 },
    { x: 4, y: 2 },
  ];
  // eslint-disable-next-line no-unused-vars
  let apple = { x: 8, y: 8 };
  let score = 0;

  const CELL_SIZE = 25;
</script>

<div class="main-content min-width">
  <div class="score">{score}</div>

  <div
    class="board"
    style="width: {BOARD_DIMENSIONS.x *
      CELL_SIZE}px; height: {BOARD_DIMENSIONS.y * CELL_SIZE}px"
  >
    <div class="body-part" />

    <div class="apple" />
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

<style>
  :root {
    --cell-size: 25px;
    --tick-time: 100ms;
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
