<script>
	import NesCssDarkMode from "./NesCssDarkMode.svelte";
</script>

<NesCssDarkMode />

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
	:root {
		--background-color: #fff;
		--text-color: #212529;
		--food-emoji: "🍎";
		--snake-emoji: "🐍";
		--board-outline-color: var(--text-color);
		--checker-color: #f0f0f0;
		--snake-color: green;
	}

	@media (prefers-color-scheme: dark) {
		:root {
			--background-color: #212529;
			--text-color: #fff;
			--food-emoji: "🎃";
			--snake-emoji: "🪱";
			--board-outline-color: #676767;
			--checker-color: #343434;
			--snake-color: palevioletred;
		}

		:global(a) {
			color: cornflowerblue;
		}
	}

	:global(body) {
		background-color: var(--background-color);
		color: var(--text-color);
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
