<script>
	import { page } from "$app/stores.js";

	$: pathname = $page.url.pathname;
	$: [description, task] = pathname.split("/").reverse();
</script>

<svelte:head><title>{task} {description}</title></svelte:head>

<header>
	<h1>{description.charAt(0).toUpperCase()}{description.slice(1)} {task}</h1>
	<nav>
		<ul>
			<li style="justify-self: right">
				<a href="/">🏡 Go home</a>
			</li>
			{#if description === "problem"}
				<li><a href="solution">🏁 Solution</a></li>
			{:else}
				<li><a href="problem">🛠 Work area</a></li>
			{/if}
		</ul>
	</nav>
</header>

<slot />

<style>
	header {
		display: block;
		margin: 0 auto;
		width: 18ch;
	}

	h1 {
		font-size: 1.5rem;
		margin: 0.5rem 0 0 0;
	}

	ul {
		font-size: 0.8rem;
		padding-left: 0;

		display: flex;
		gap: 1.4rem;

		list-style: none;
	}
</style>
