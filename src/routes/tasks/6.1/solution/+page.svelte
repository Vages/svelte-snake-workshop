<script>
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	import GameOverModal from "./GameOverModal.svelte";
	import {
		DIRECTION,
		DIRECTION_TO_VECTOR,
		convertKeyboardKeyToDirection,
		getNextSnake,
		isEqual,
		isInsideBoard,
		isSnakeEatingItself,
		pickRandomOpenSpace,
		shiftNonPerpendicularMovesOffQueue,
	} from "$lib/game-helpers.js";
	import Board from "./Board.svelte";

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
		const shiftedQueue = shiftNonPerpendicularMovesOffQueue(
			headDirectionQueue,
			headDirection
		);
		// If the queue is empty, use the current direction
		const nextDirection = shiftedQueue[0] ?? headDirection;
		const nextQueue = shiftedQueue.slice(1);
		headDirectionQueue = nextQueue;
		headDirection = nextDirection;
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
		headDirectionQueue = [...headDirectionQueue, keyDirection];
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
</script>

<svelte:body on:keydown={handleKeydown} />

<div class="main-content min-width">
	<div class="score">{score}</div>

	<Board
		{apple}
		boardDimensions={BOARD_DIMENSIONS}
		{gameOver}
		{score}
		{snake}
		tickTime={TICK_TIME}
	/>
</div>

{#if gameOver}
	<div class="modal-container" in:fly={{ delay: 1300, y: -100 }}>
		<!-- This div, together with the class modal-container is required to center the content -->
		<div style="position: relative; left: -50%;">
			<GameOverModal {score} />
		</div>
	</div>
{/if}

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
</style>
