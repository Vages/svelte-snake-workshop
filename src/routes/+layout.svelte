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
