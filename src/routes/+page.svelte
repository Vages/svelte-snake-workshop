<script>
	const tasks = [
		"1.1",
		"1.2",
		"1.3",
		"2.1",
		"2.2",
		"3.1",
		"3.2",
		"3.3",
		"3.4",
		"3.5",
		"3.6",
		"4.1",
		"4.2",
		"4.3",
		"4.4",
		"5.1",
		"5.2",
		"6.1",
		"6.2",
	];
</script>

<svelte:head><title>Svelte Snake Workshop</title></svelte:head>

<h1>Svelte Snake Workshop</h1>
<article>
	<h2>Finished game</h2>

	<p>
		Try <a href="/finished-game">our example of a finished game</a>.
	</p>

	<h2>Tasks</h2>

	<p>
		Open the file <a
			href="https://github.com/Vages/svelte-snake-workshop/blob/main/TASKS.md"
			>TASKS.md</a
		> to get going.
	</p>

	<figure>
		<figcaption>Links to the output of each task</figcaption>
		<table>
			<thead>
				<tr>
					<th>Task</th>
					<th>Problem</th>
					<th>Solution</th>
				</tr>
			</thead>
			<tbody>
				{#each tasks as task}
					<tr>
						<td>{task}</td>
						<td><a href="/tasks/{task}/problem">Problem</a></td>
						<td><a href="/tasks/{task}/solution">Solution</a></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</figure>
</article>

<style>
	article {
		text-align: center;
		width: 35ch;
		margin: 0 auto;
	}

	figcaption {
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	p {
		text-align: left;
	}

	h1 {
		font-size: 1.5rem;
		text-align: center;
		margin-bottom: 2.5rem;
	}

	h1::before {
		content: "🍎";
	}
	h1::after {
		content: "🐍";
	}
	h1::before,
	h1::after {
		margin: 0 1rem;
		font-size: 4rem;
	}

	h2 {
		font-size: 1.2rem;
		margin-top: 2.5rem;
	}

	table {
		border: 2px solid black;
		margin: 0 auto;
	}

	figure {
		margin-top: 2rem;
	}

	td,
	th {
		border: 2px solid black;
		padding: 0.75rem;
	}
</style>
