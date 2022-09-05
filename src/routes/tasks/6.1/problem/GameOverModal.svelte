<script>
	import NesContainer from "$lib/NesContainer.svelte";

	export let score;
</script>

<NesContainer>
	<h2 class="title">Game over</h2>
	<div>You got {score} points.</div>
</NesContainer>

<style>
	section {
		margin: 2rem 0;
	}
</style>
