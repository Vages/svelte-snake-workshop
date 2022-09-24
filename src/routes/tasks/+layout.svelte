<script>
	import { page } from "$app/stores.js";

	$: pathname = $page.url.pathname;
	$: [description, task] = pathname.split("/").reverse();
	let tasksData = {
		"1.1": {
			hash: "task-11-place-the-apple",
			hashNorsk: "oppgave-11-plasser-eplet",
			title: "Place the apple",
		},
		"1.2": {
			hash: "task-12-draw-the-snake-on-the-screen",
			hashNorsk: "oppgave-12-tegn-slangen-på-skjermen",
			title: "Draw the snake on the screen",
		},
		"1.3": {
			hash: "task-13-extract-the-position-calculation-as-a-function",
			hashNorsk: "oppgave-13-trekk-posisjonsutregningen-ut-i-en-funksjon",
			title: "Extract the position calculation as a function",
		},

		"2.1": {
			hash: "task-21-listen-for-keyboard-input",
			hashNorsk: "oppgave-21-lytt-til-trykk-på-tastaturet",
			title: "Listen for keyboard input",
		},
		"2.2": {
			hash: "task-22-move-the-snake-one-step-in-the-direction-of-a-key-press",
			hashNorsk:
				"oppgave-22-beveg-slangen-ett-steg-i-samme-retning-som-et-tastetrykk",
			title: "Move the snake one step in the direction of a key press",
		},
		"3.1": {
			hash: "task-31-award-points-when-the-snake-eats-the-apple",
			hashNorsk: "oppgave-31-gi-poeng-når-slangen-spiser-eplet",
			title: "Award points when the snake eats the apple",
		},
		"3.2": {
			hash: "task-32-make-the-snake-grow-when-it-eats-an-apple",
			hashNorsk: "oppgave-32-få-slangen-til-å-vokse-når-den-spiser-eplet",
			title: "Make the snake grow when it eats an apple",
		},
		"3.3": {
			hash: "task-33-make-the-game-tick",
			hashNorsk: "oppgave-33-få-spillet-til-å-tikke",
			title: "Make the game tick",
		},
		"3.4": {
			hash: "task-34-stop-ticking-when-the-snake-dies",
			hashNorsk: "oppgave-34-stopp-tikking-når-slangen-dør",
			title: "Stop ticking when the snake dies",
		},
		"3.5": {
			hash: "task-35-only-react-to-perpendicular-key-presses",
			hashNorsk: "oppgave-35-bare-reager-på-vinkelrette-tastetrykk",
			title: "Only react to perpendicular key presses",
		},
		"3.6": {
			hash: "task-36-use-a-queue-to-keep-track-of-future-movements",
			hashNorsk:
				"oppgave-36-bruk-en-kø-til-å-holde-styr-på-fremtidige-bevegelser",
			title: "Use a queue to keep track of future movements",
		},
		"4.1": {
			hash: "task-41-animate-the-apple",
			hashNorsk: "oppgave-41-animer-eplet",
			title: "Animate the apple",
		},
		"4.2": {
			hash: "task-42-add-a-skull-when-the-snake-dies",
			hashNorsk: "oppgave-42-legg-på-en-hodeskalle-når-slangen-dør",
			title: "Add a skull when the snake dies",
		},
		"4.3": {
			hash: "task-43-animate-the-snakes-head",
			hashNorsk: "oppgave-43-animer-slangehodet",
			title: "Animate the snake's head",
		},
		"4.4": {
			hash: "task-44-animate-the-snakes-tail",
			hashNorsk: "oppgave-44-animer-slangehalen",
			title: "Animate the snake's tail",
		},

		"5.1": {
			hash: "task-51-create-a-component-that-appears-when-the-game-ends",
			hashNorsk: "oppgave-51-lag-en-komponent-som-dukker-opp-ved-spillslutt",
			title: "Create a component that appears when the game ends",
		},

		"5.2": {
			hash: "task-52-extract-the-board-as-a-component",
			hashNorsk: "oppgave-52-trekk-ut-brettet-som-en-komponent",
			title: "Extract the board as a component",
		},

		"6.1": {
			hash: "task-61-fetch-the-high-score-list-from-the-api",
			hashNorsk: "oppgave-61-hent-topplista-fra-api-et",
			title: "Fetch the high score list from the API",
		},

		"6.2": {
			hash: "task-62-add-name-input-field",
			hashNorsk:
				"oppgave-62-legg-til-et-felt-der-folk-kan-fylle-inn-navnet-sitt",
			title: "Add name input field",
		},
	};

	const englishTaskLink = (hash) =>
		"https://github.com/Vages/svelte-snake-workshop/blob/main/TASKS.md#" + hash;
	const norskTaskLink = (hash) =>
		"https://github.com/Vages/svelte-snake-workshop/blob/main/locale/nob/TASKS.md#" +
		hash;

	const nextProblemUrl = (task) => {
		const tasks = Object.keys(tasksData);
		const index = tasks.findIndex((task2) => task2 === task);

		const nextTask = tasks[index + 1];
		if (nextTask === undefined) {
			return undefined;
		}
		return "/tasks/" + nextTask + "/problem";
	};
	$: nextProblem = nextProblemUrl(task);
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

			<li style="">
				{#if nextProblem !== undefined}
					<a href={nextProblem}> Next </a>
				{/if}
			</li>
		</ul>
	</nav>
</header>

<slot />

<div class="title">
	<h2>{tasksData[task].title}</h2>
	<p>
		<a href={englishTaskLink(tasksData[task].hash)} target="_blank"
			>🇬🇧 English task description</a
		>
	</p>

	<p>
		<a href={norskTaskLink(tasksData[task].hashNorsk)} target="_blank"
			>🇳🇴 Norsk oppgavebeskrivelse
		</a>
	</p>
</div>

<style>
	.title {
		display: block;
		margin: 0 auto;
		width: 34ch;
	}
	header {
		display: block;
		margin: 0 auto;
		width: 24ch;
	}

	h1 {
		font-size: 1.5rem;
		margin: 0.5rem 0 0 0;
	}

	h2 {
		font-size: 1rem;
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
