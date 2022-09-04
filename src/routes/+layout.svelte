<script>
	import { page } from "$app/stores.js";

	$: pathname = $page.url.pathname;
	$: regexresults = /\/task-(?<task>\d+\.\d+)\/(?<description>\w+)/.exec(
		pathname
	);

	$: task = regexresults?.groups?.task;
	$: description = regexresults?.groups?.description;
	$: isTaskPage = task && description;
	$: title = isTaskPage ? `${task} ${description}` : "Svelte Snake Workshop";
</script>

<svelte:head><title>{title}</title></svelte:head>

{#if isTaskPage}
	<h1>{title}</h1>
{/if}

<slot />

<footer>
	<div class="signature">
		<p>
			Made with
			<a href="https://svelte.dev/">
				<img alt="Svelte logo" width="13px" height="16px" src="/svelte.png" />
				Svelte
			</a>
			and
			<a href="https://kit.svelte.dev/"> SvelteKit </a>
			in the
			<a href="https://github.com/Vages/svelte-snake-workshop">
				Svelte Snake Workshop
			</a>
		</p>
	</div>
</footer>

<style>
	h1 {
		text-align: center;
		font-size: 1rem;
		margin: 0.5rem 0 0 0;
	}
	footer {
		margin: 1rem;
		display: flex;
		justify-content: space-around;
	}

	.signature {
		font-size: 0.5rem;
	}

	.signature img {
		margin-right: -0.5em;
		margin-top: -0.25em;
	}
</style>
