<script>
	import { createEventDispatcher, onMount } from "svelte";

	import * as api from "$lib/api";
	import NesContainer from "$lib/NesContainer.svelte";

	export let score;

	let getPromise = api.fetchScores();

	const fetchScores = () => {
		getPromise = api.fetchScores();
	};

	onMount(fetchScores);

	let name = "";
	let postPromise;
	const postScore = (e) => {
		e.preventDefault();
		postPromise = api.postScore({ name, score }).then(() => fetchScores());
	};

	const dispatch = createEventDispatcher();
</script>

<NesContainer>
	<h2 class="title">Game over</h2>
	<div>You got {score} points.</div>
	<section>
		<h3>High scores</h3>
		{#await getPromise}
			<p>Fetching scores</p>
		{:then highScores}
			<div
				class="nes-table-responsive"
				style="width: max-content; margin-left: auto; margin-right: auto;"
			>
				<table class="nes-table is-bordered is-centered">
					<tbody>
						{#each highScores as entry}
							<tr>
								<td>{entry.name}</td>
								<td>{entry.score}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{:catch error}
			<div class="nes-text is-error">Got error "{error.message}"</div>
			<button class="nes-btn" on:click={fetchScores}>Retry</button>
		{/await}
	</section>
	<section>
		<h3>Submit score</h3>
		{#if !postPromise}
			<form on:submit={postScore}>
				<div>
					<label class="nes-field">
						Name <input
							minlength="3"
							required
							type="text"
							class="nes-input"
							bind:value={name}
						/>
					</label>
				</div>
				<button type="submit" class="nes-btn is-primary">Submit</button>
			</form>
		{:else}
			{#await postPromise}
				<p>Submitting</p>
			{:then success}
				<div class="nes-text is-success">Successfully submitted!</div>
			{:catch error}
				<div class="nes-text is-error">Got error "{error.message}"</div>
				<button class="nes-btn is-primary" on:click={postScore}>Retry</button>
			{/await}
		{/if}
	</section>
	<button on:click={() => dispatch("close_modal")} class="nes-btn">
		Close
	</button>
</NesContainer>

<style>
	section {
		margin: 2rem 0;
	}
</style>
