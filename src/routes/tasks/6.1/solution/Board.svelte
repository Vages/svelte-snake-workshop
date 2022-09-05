<script>
	import { scale } from "svelte/transition";

	export let apple;
	export let boardDimensions;
	export let gameOver;
	export let score;
	export let snake;
	export let tickTime;

	const CELL_SIZE = 25;

	function calculatePositionAsStyle(coordinate) {
		return `left: ${coordinate.x * CELL_SIZE}px; top: ${
			coordinate.y * CELL_SIZE
		}px`;
	}
</script>

<div
	class="board"
	style="--cell-size: {CELL_SIZE}px; --tick-time: {tickTime}ms; --board-size-x: {boardDimensions.x}; --board-size-y: {boardDimensions.y}"
>
	{#each snake.slice(1) as bodyPart}
		<div class="body-part" style={calculatePositionAsStyle(bodyPart)} />
	{/each}
	<div class="body-part head" style={calculatePositionAsStyle(snake[0])} />
	<div
		class="body-part tail"
		style={calculatePositionAsStyle(snake[snake.length - 1])}
	/>
	<!-- This extra tail is added to compensate for tail flickering in Chrome and Safari -->
	<div
		class="body-part tail"
		style={calculatePositionAsStyle(snake[snake.length - 2])}
	/>

	{#key score}
		<div in:scale style={calculatePositionAsStyle(apple)} class="apple" />
	{/key}

	{#if gameOver}
		<div
			in:scale={{ delay: 300 }}
			style={calculatePositionAsStyle(snake[0])}
			class="skull"
		/>
	{/if}
</div>

<style>
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
