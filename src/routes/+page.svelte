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
		"5.3",
	];
</script>

<h1>Welcome to the Svelte workshop!</h1>

<p>Open the file TASKS.md to get going.</p>

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
	table {
		border: 2px solid black;
	}

	td,
	th {
		border: 2px solid black;
		padding: 0.75rem;
	}
</style>
