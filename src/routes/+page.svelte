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
		"6.1",
		"6.2",
	];
</script>

<h1>The Svelte Snake Workshop</h1>

<p>
	This is the <a href="finished-game">finished game</a> you will be trying to make.
</p>

<p>
	Open the file <a
		href="https://github.com/Vages/svelte-snake-workshop/blob/main/TASKS.md"
		>TASKS.md</a
	> to get going.
</p>

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

<style>
	h1,
	p {
		text-align: center;
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
