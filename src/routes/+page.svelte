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

<article>
	<h1>The Svelte Snake Workshop</h1>

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
						<td><a href="/task-{task}/problem">Problem</a></td>
						<td><a href="/task-{task}/solution">Solution</a></td>
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
		font-size: 2rem;
	}
	h2 {
		font-size: 1.2rem;
	}

	table {
		border: 2px solid black;
		margin: 0 auto;
	}

	td,
	th {
		border: 2px solid black;
		padding: 0.75rem;
	}
</style>
