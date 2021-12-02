# Learn Svelte making Snake

<!-- mdpo-include-codeblocks -->

<!-- mdpo-disable -->
<!-- prettier-ignore-start -->

<!-- mdpo-enable-next-line -->
> Read in the language that you prefer:
>
> - [🇬🇧 English][tasks-eng]
> - [🇳🇴 Norsk bokmål][tasks-nob]

<!-- prettier-ignore-end -->

<!-- mdpo-enable -->

A workshop by [Eirik Vågeskar](https://github.com/vages), with the help of [Johannes Moskvil](https://github.com/johannbm), [Brede Kristensen](https://github.com/BredeYabo/), [Marcus Goplen](https://github.com/Goplen/), [Arve Seljebu](https://github.com/arve0/) and more colleagues at [Knowit Objectnet](https://www.knowit.no/kontakt/selskap/knowit-objectnet-as/).

## Intro: We are going to make the game Snake in Svelte

![A quadratic checkered board containing a green snake and a red apple. Above the board, you can see that the score is 0.][gameplay-png]

### Svelte

[Svelte](https://svelte.dev) is a tiny web framework. Its home page presents it as follows:

> Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.
>
> Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.
>
> We're proud that Svelte was recently voted the [most loved framework](https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks) with the [most satisfied developers](https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/) in a pair of industry surveys. We think you'll love it too. Read [the introductory blog post](https://svelte.dev/blog/svelte-3-rethinking-reactivity) to learn more.

#### Svelte's advantages

The applications you write in Svelte are usually [smaller and faster than an equivalent application is in React or Vue](https://www.freecodecamp.org/news/a-realworld-comparison-of-front-end-frameworks-with-benchmarks-2019-update-4be0d3c78075/).

![Facsimile of https://www.freecodecamp.org/news/a-realworld-comparison-of-front-end-frameworks-with-benchmarks-2019-update-4be0d3c78075/ comparing transfer size for Svelte and several other frameworks][transfer-size-png]

![Facsimile of https://www.freecodecamp.org/news/a-realworld-comparison-of-front-end-frameworks-with-benchmarks-2019-update-4be0d3c78075/ comparing lines of source code for Svelte and several other frameworks][source-code-size-png]

### You need the following on your computer

- [node](https://nodejs.org/en/)
- A text editor, preferably [one where you can add Svelte support](https://github.com/sveltejs/integrations#editor-extensions).
- A clone of [Vages/svelte-snake-workshop](https://github.com/Vages/svelte-snake-workshop)

If you need help installing, check out [SETUP.md](./SETUP.md).

### How this workshop tends to go

The repo [Vages/svelte-snake-workshop](https://github.com/Vages/svelte-snake-workshop) contains everything you need. You can set the pace yourself. It is possible to complete the workshop on your own.

We have divided the workshop into 6 parts. Each part contains two or more tasks. Each task starts with a task text, sometimes followed by hints. You can avoid or delay reading the hints if you want to challenge yourself. Switch to `task-X-begin` before solving each new task (for example `git checkout task-1.2-begin`). `task-X-end` contains the task solution. To remove the code you've added and continue to the next task, open your command line or terminal and input `git stash` and then `git checkout task-X-begin`.

When we hold the workshop physically or digitally, the instructors go through tasks and questions at irregular intervals. You can ask for help from the instructors whenever you want.

We have made nearly all styling beforehand, so that you can spend the maximum amount of time coding.

## Part 1: Simple graphics

When you have finished this part, the game should show where the snake and the apple are on the board.

### Tutorial: What a Svelte file looks like

Svelte is a fusion of HTML, CSS and Javascript with some improvements. In Svelte, you can write these three languages in the same file. The parts are called “script”, “template” and “styling”.

```svelte
<!-- script -->
<script>
  let answer = 42;
  let color = "red";
</script>

<!-- template -->
<div style="color: {color}">
  Hello world, the answer is {answer}
</div>

<!-- styling -->
<style>
  div {
    font-weight: bold;
  }
</style>
```

Note: You can run the previous example and most examples in this document by pasting the source code into the [Svelte REPL](https://svelte.dev/repl). You can save them for later and share them with anyone using a URL, like this: <https://svelte.dev/repl/268a89ee9c4c444ebc04025925f37c38>

You use curly brackets inside _template_ to insert variables, calculations and function calls.

```svelte
<script>
  let answer = 42;
</script>

<div>The meaning of life is {a}.</div>
<div>The square of the meaning is {a * a}</div>
<div>The meaning of life has the sign {Math.sign(a)}</div>
```

Solve [the task from the Svelte tutorial about adding data](https://svelte.dev/tutorial/adding-data) before you continue.

### Task 1.1: Place the apple

Open the file `src/routes/_game/App.svelte`.

The board contains a `<div class="apple" />`. The variable `apple` contains a coordinate. Your task is to place the apple on the square given by the coordinate.

The board's X axis points rightwards, and the Y axis downwards. The constant `CELL_SIZE` stores the side length of every square.

![X axis pointing rightwards, Y axis pointing downwards][axes-png]

When you are finished, things should like this:

![The apple somewhere near the middle of the board][apple-near-middle-of-board-png]

#### Hint: The style attribute

To override and add styling to elements in HTML (not just Svelte), use the attribute `style`. The attribute takes CSS statements.

```svelte
<div style="font-weight: bold;">Bold text</div>
```

#### Hint: left and top in CSS

Use the `left` and `top` CSS properties to move an HTML element along the `x` and `y` axes respectively.

```svelte
<div style="top: 20px; left: 10px;">Moved</div>
```

#### Hint: To reveal almost everything

To place the apple, you need to do something like this:

```svelte
<div class="apple" style="left: {calculation1}px; top: {calculation2}px;" />
```

You need to use `apple.x` and `apple.y` and `CELL_SIZE` to get these calculations to work.

### Tutorial: each blocks

The next task will require an each block.

Solve this task from the Svelte tutorial about [how each blocks work](https://svelte.dev/tutorial/each-blocks).

### Task 1.2: Draw the snake on the screen

Your task is to draw the snake on the board.

The snake is a collection of coordinates stored in the variable `snake`. The first element in the collection is the head. Draw each coordinate in the collection as a `<div class="body-part" />`.

The snake should look like this when you are done:

![Apple and snake correctly positioned on the board][task-1-2-end-png]

### Task 1.3: Extract the position calculation as a function

We use the calculation (`left: {foo.x * CELL_SIZE}px; top: {foo.y * CELL_SIZE}px`) multiple times in the code. The code will be easier to maintain if we put this calculation in one place.

Your task is to move the calculation to a function, `calculatePositionAsStyle(coordinate)`, and replace all instances of the calculation with a call to this function. The function should take a coordinate as its only argument and return a string with values for top and left.

## Part 2: Game controls

When you have finished this part, it should be possible to control the snake with the arrow keys.

### Tutorial: Listening for input

Solve the following tasks from the Svelte tutorial before you go on:

- [Listening for DOM events on an element](https://svelte.dev/tutorial/dom-events)
- [Listening for DOM events on the window](https://svelte.dev/tutorial/svelte-window)

### Task 2.1: Listen for keyboard input

Your task is to listen for keyboard input and send it to the function `console.log`. The application should be able to “hear” keyboard input no matter which page is currently in focus, so that the user doesn’t have to click on a specific element on the page to play the game.

Avoid listening to keyboard input from the entire window (`svelte:window` refers to the window in its entirety). Instead, add a listener to the Svelte specific element that refers to `document.body`.

#### Hint: Keydown event

The event to listen for is called `keydown`.You listen for it in Svelte using `on:keydown`.

#### Hint: svelte:body

You listen to `document.body` using the element `<svelte:body />`. You listen to events on it just like with any HTML-element.

### Tutorial: Changing variable values

You will have to know how to change variable values in the next section. Solve the following tasks from the Svelte tutorial before you go on:

- [Updating regular variables](https://svelte.dev/tutorial/reactive-assignments)
- [Updating arrays and objects](https://svelte.dev/tutorial/updating-arrays-and-objects)

### Task 2.2: Move the snake one step in the direction of a key press

Your task is to translate key presses to movement. The snake should move one step in the given direction every time the user presses an arrow key. Avoid moving the snake when the user presses keys other than the arrow keys.

To make this simpler, we have made a function `convertKeyboardKeyToDirection`, found in `utils.js`, which translates key names to directions. We use the cardinal directions to describe the directions on the board: West is left, north is up.

For now, the snake should also move if it hits itself or a wall. We will implement game over in a later task.

#### Hint: Important Array functions

- The simplest way to add elements to the start or end of an array is to use _spreading_: `[a, ...b]`. (Svelte does not react to push and pop; we will come back to this later.)
- The function [Array.prototype.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) is useful when you want to remove elements from the start and end of an array.

#### Hint: Helpful utilities in `utils.js`

In `utils.js` you will find:

- `add(coordinateA, coordinateB)`, to add two vectors/coordinates.
- `DIRECTION_TO_VECTOR`, to go from cardinal direction to direction vector.

Add the line `import { DIRECTION_TO_VECTOR, add } from './utils'` to the top of `<script>` to use them.

## Part 3: Logic

When you have finished this part, the player should be awarded points when the snake eats an apple. The game should stop if the snake enters an illegal position. And the game clock should tick, so that the snake moves at regular intervals, instead of when the player presses the keys.

### Tutorial: The dollar sign in Svelte – reactive expressions.

In spreadsheets, like Microsoft Excel, you can write formulas in the cells, for example `=A1*B3`. This places the calculation result in the cell, and the result is automatically updated when you change the contents of some cell that the calculation depends on. This is not the way things usually are in programming: You cannot say `a = 2; b = a * 2; a = 8` and expect `b` to be 16 instead of 4 because 8 doubled is 16. But you can make it this way in Svelte.

In Svelte we can make the computer re-run a statement as a reaction to changes. This is done by putting a dollar sign in front of the statement. Statements that start with a dollar sign are called _reactive statements_, because the statement is re-run as a reaction to something else.

If the statement contains a variable assignment, Svelte can keep the value updated for us.

```svelte
<script>
  let b = 3;
  let c = 4;

  $: a = (b * c) / 2; // a === 6
  b = 6;
</script>

<div>
  <!-- 
    Without `$: …`, a would have the value 6, 
    but is automatically given the value 12 after 
    b is given a new value. 
  -->
  The triangle's base is {b}, its height is {c} and its area is {a}.
</div>
```

Solve [the task about reactive statements from the Svelte tutorial](https://svelte.dev/tutorial/reactive-statements) before you go on.

Almost any statement can come after the dollar sign, not just assignments. You can also write function calls and if-sentences:

```svelte
<script>
  let lastUserInput = "";
  $: if (lastUserInput === "hello") {
    // Open the console to see this message
    console.log("hello to you too");
  }
</script>

<label>Write something: <input bind:value={lastUserInput} /></label>
```

```svelte
<script>
  let lastUserInput = "";
  // What the user said, as repeated by a parrot
  $: parrotOutput = parrot(lastUserInput);

  function parrot(something) {
    return something + ", sqawk!";
  }
</script>

<label>Say something: <input bind:value={lastUserInput} /></label>
<div>
  The parrot says: {parrotOutput}
</div>
```

A reactive statement is run once when the app starts. Svelte runs it again every time a variable used inside the statement is given a new value. Svelte automatically notices which values a reactive statement depends on. You do not have to state this yourself, like with for example `React.useEffect`.

Note: Svelte only notices changes that result from using the assignment operator, `=` (for example `foo.bar = "baz"`), and not those caused by method calls (such as `.push` and `.pop`). See [the task about updating arrays and objects](https://svelte.dev/tutorial/updating-arrays-and-objects) for a more detailed explanation.

When you write game logic, you can often translate rules almost directly to reactive statements. “If `x === foo`, then do a, b and c” becomes `$: if (x === foo) { a(); b(); c(); }`.

### Task 3.1: Award points when the snake eats the apple

Your task is to write a reactive statement with an if-sentence so that when the snake head is on the same coordinate as the apple, the score increases by 1.

Create a variable `score`. This is the number of apples the snake has eaten.

When you have the score increase working, make sure that the apple is given a new random position on the board as soon as the snake eats it.

Note: You will save a lot of work in this task by using helper functions from `utils.js`.

#### Hint: Help in utils.js

In `utils.js` you will find the function `isEqual` which says whether two coordinates are the same, and the function `pickRandomOpenSpace`, which draws a suitable location for the new apple.

### Task 3.2: Make the snake grow when it eats an apple

Your task is to make the snake grow after it has eaten an apple.

To make things easier for you, we have extracted the logic for calculating the next snake as the function `getNextSnake(snake, direction, ?shouldGrow)`. `shouldGrow` is an optional third argument, and is a boolean.

### Tutorial: Svelte component lifecycle, plus setInterval

In order to solve the upcoming task, you will have to be able to solve the following tasks from the Svelte tutorial:

- [Task about `onMount`](https://svelte.dev/tutorial/onmount)
- [Task about `onDestroy`](https://svelte.dev/tutorial/ondestroy) (which also touches upon `setInterval`)

### Task 3.3: Make the game tick

Your task is to make the snake move at regular time intervals instead of when the user presses an arrow key. When the time to move has come, the snake should move in the direction that the user last pressed. In the demo version of the game, the time interval is 100 ms, but you can change it if you wish.

### Task 3.4: Stop ticking when the snake dies

When the snake hits itself or a wall, it's _game over_.

Your task is to introduce _game over_ by stopping the game clock when one of the said things occur. The game should stop as a _reaction_ to the snake moving, and not as a part of `moveSnake`.

To stop the ticking, we have extracted a function `stopTicking` that you might use.

#### Hint: Helper functions

You will find the helpful functions `isInsideBoard` and `isSnakeEatingItself` in `utils.js`.

#### Hint: Reactivity

Remember reactivity and if-sentences, `$: if (x) { … }`, and how you can translate human-language game logic to such sentences almost verbatim.

If we were to state the rules for game over in spoken language, we would have said something like:

- “If the snake head is outside the board or inside the snake itself, it's game over.”
- “If the game is over, the ticking stops.”

### Task 3.5: Only react to perpendicular key presses

Once you have gotten game over working, you might discover a problem: The snake dies if you press the arrow key that points in the opposite direction of where the snake is currently headed, because it ends up eating its own neck. This can also happen if you try to take a U-turn. In this and the next task, we will try to avoid this.

Your task is to make the snake react only to key presses that are perpendicular to the snake's current direction. If the snake is going north, the game should only register key presses from the left and right arrow keys. As with many other tasks, there is a function in `utils.js` that can help you.

### Task 3.6: Use a queue to keep track of future movements

**This is a challenge task that has more to do with programming than Svelte itself. You can skip to the next task if you want.**

In the solution to task 3.5 that you find in `task-3.5-end`, you can still make the snake eat itself if you are quick: If the snake for example moves north and the player quickly presses ⬅️ followed by ⬇️, the game ends up registering ⬇️ as the next direction.

We can avoid the problem by using a _queue_ to keep track of the directions that the snake is going to move in. When the snake is going to move, we dequeue a direction and move the snake in that direction. This makes it possible to input advanced movements quickly without worrying about timing.

We have created the variable `headDirectionQueue`, an array that keeps track of the directions the user has planned for the snake to move in. Instead of changing `headDirection` when the user presses a key, you should append the direction the user entered to `headDirectionQueue`. When it is time for the snake to move, the app should use the first perpendicular direction in the queue as the new value for `headDirection`. In other words: Remove all non-perpendicular directions from the start of the queue until you find a perpendicular direction. Use this element as the next `headDirection` and let the subsequent queue entries remain as they are.

Make the necessary changes in `moveSnake` and `handleKeydown`.

## Part 4: Animation

When you have finished this part, the game should have an animated snake, skull and apples.

### Tutorial: Control blocks

- [if-blocks](https://svelte.dev/tutorial/if-blocks)
- [else-blocks](https://svelte.dev/tutorial/else-blocks)
- [key-blocks](https://svelte.dev/tutorial/key-blocks)

### Tutorial: How transitions work

Svelte comes with the module `svelte/transition`. This makes it possible to animate an element that enters or exits the document.

- [The transition-attribute](https://svelte.dev/tutorial/transition)
- [Adding parameters to transitions](https://svelte.dev/tutorial/adding-parameters-to-transitions)
- [Different transitions for in and out](https://svelte.dev/tutorial/in-and-out)

### Task 4.1: Animate the apple

Your task is to make the new apple pop up in its place when the snake eats the old apple.

To make this work, you need to import the transition `scale` from `svelte/transition` and add it to the right element. To limit the animation to when the apple pops up, you should use `in:` instead of `transition:`. (You can also try [other transitions](https://svelte.dev/docs#svelte_transition).)

### Hint: Use a suitable block

Normally, Svelte only runs a transition animation if the HTML-element it is assigned to disappears from or enters the document. You can tell Svelte to re-run the transition when some value changes using a key-block: `{#key <value>}<content>{/key}`.

### Task 4.2: Add a skull when the snake dies

In the style block, there is a class `skull`. Your task is to make a `<div/>` with the class `skull` pop up when the snake dies. It should have the same coordinates as the snake's head.

To animate the skull, add a `transition:scale` with a 300 ms delay.

### Task 4.3: Animate the snake's head

In the style block, there is a class `head`. This styles and animates a snake head as long as you put it on an element with the class `body-part`. Your task is to add an animated snake head using this class.

You do not need to use any `transition:…` here. The styling takes care of the animation as long as you put the right class in the right place.

### Task 4.4: Animate the snake's tail

Your task is to animate the snake's tail. There is a class, `tail`, that you can add to an element to get the same sliding animation as for the head, but without magnifying the body part.

Add an animated tail to the snake.

**Warning**: The tail may blink a little in all browsers except Firefox (including Chrome and Safari) due to a layout engine bug. You can count the task as done when you have an animated tail that sometimes blinks. The task solution contains a workaround for the blinking. Unfortunately, we can not reveal what the workaround is, because that would reveal the solution to the main task.

## Task 5: Components and network

When you have finished this part, the game should have a game over screen with a high score list fetched from a server. On the screen, you should be able to register your name and submit it to the server along with your latest score.

### Tutorial: Components

Do the following tasks from Svelte tutorial:

- [Nested components](https://svelte.dev/tutorial/nested-components)
- [Declaring props](https://svelte.dev/tutorial/declaring-props)

### Task 5.1: Create a component that appears when the game ends

The `GameOver.svelte` file is located in the same directory as `App.svelte`. Your task is to make the component appear on screen when the game is over and make it show the player's score.

It's a bit tricky to get the component to appear on screen in an elegant way. We have therefore added some divs to the bottom of `App.svelte`'s template section where you can mount the `<GameOver>` component.

### Warning: The rest of part 5 is hard

The rest of the tasks in part 5 are for people who have experience with network calls, promises and the like in Javascript. If you think the tasks are too hard, you can skip to part 6.

### Tutorial: Await blocks

Javascript _promises_ are used for actions that could take time and possibly fail, often network requests. Svelte has a special block to handle promises, called the await-block.

Solve [the task about await blocks from Svelte tutorial](https://svelte.dev/tutorial/await-blocks) before you proceed.

### Task 5.2: Fetch the high score list from the API

The SvelteKit process which runs during development contains a small in-memory database keeping track of a high score list that you can fetch and post your last score to.

The `fetchScores` function from `api.js` fetches the high score list. Your task is to import this function and display the high score list in the `<GameOver>` component you made.

If you want to stick to the same visual theme as in the rest of the game, you can check the [documentation for the Nes.CSS theme](https://nostalgic-css.github.io/NES.css/) (or the task solution).

Warning: When working with promises, functions defined with the `function` keyword may behave strangely. To avoid bugs, use arrow functions instead (`const foo = () => {…}`).

### Tutorial: Binding variables to input fields

Solve [the task about text inputs and binding](https://svelte.dev/tutorial/text-inputs) before you proceed.

### Task 5.3: Add name input field

Your task is to create a field where people can fill in their name and score. Also create a button that people can click on to submit their name and score in the format `{ name: string, score: number }`. You can use the `postScore` function from `api.js` to do this.

When the score has been submitted, the component should fetch the updated high score list.

Note: Because the database is not in permanent memory, any data you add to it will be lost when you restart the development server. If you cause the database to break by submitting invalid data, you can restart the development server to get a blank slate.

## Task 6: Game Over?

Congratulations! **You were very smart to read through the tasks before starting!** Or maybe you actually did all the tasks? Wooooaaahh!!!!!1

![A screenshot of the Solitaire game over screen][solitaire-win-png]

Task 6 is a sandbox where you can do almost anything you want to.

### Task 6.1: Improve the game

There are still some possible improvements to the game:

#### Tasks without solutions in the main branch

We have not tried making the following things ourselves (yet), but we think they are both solvable – and fun:

- **Edge holes**: Holes on the board edges that the snake can use to teleport to an equivalent hole on the other side of the board, like Pacman.
- **Obstacles**: Some areas in the middle of the board are unreachable – call them walls, islands or whatever. They are as the edge of the board: The snake dies when it enters such an area.
- **Golden apples**: Make golden apples appear from time to time in addition to the regular apple. 5 points are awarded if you eat them within a certain time.
- **Sound effects**: Add sounds when the snake eats the apple, when it dies and such. Remember to use headphones if you share your work area with other people.

If you feel like you are not ready to work without a solution yet, you can try a task for which a solution exists in the main branch.

#### Tasks with solutions in the main branch

The game in the main branch has some functions that have not been turned into explicit tasks:

- Pause
- Start screen
- Restart button on the game over screen

Start with the state of the repository after task 5.3 and try to make these functions without looking at the solution.

### Task 6.2: Other games

Maybe you can make one of the following games:

- [Whac-a-Mole](https://en.wikipedia.org/wiki/Whac-A-Mole) – [we have already tried](https://mos.knowit.no/)
- [Breakout](<https://en.wikipedia.org/wiki/Breakout_(video_game)>)

### Task 6.3: After this course

If you think Svelte is fun and want to learn more, we have the following recommendations:

- Finish [the Svelte tutorial](https://svelte.dev/tutorial/)
  - Check [the documentation](https://svelte.dev/docs) afterwards. You know almost all there is to know there after the tutorial.
- Try [SvelteKit](https://kit.svelte.dev/), Svelte's equivalent to Next.js and Nuxt.js.
  - Your first project could be a game collection website. Publish it and wait for “flash games” to make a comeback.

### Final words

All that remains to say is that we hope you have enjoyed our workshop. Game over!

[apple-near-middle-of-board-png]: ./assets/task_1.1_end.png
[axes-png]: ./assets/axes.png
[gameplay-png]: ./assets/gameplay.png
[solitaire-win-png]: ./assets/solitaire_win.png
[source-code-size-png]: ./assets/source_code_size.png
[task-1-2-end-png]: ./assets/task_1.2_end.png
[tasks-eng]: .
[tasks-nob]: ./locale/nob/TASKS.md
[transfer-size-png]: ./assets/transfer_size.png