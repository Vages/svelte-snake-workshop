<script>
  import { onMount } from "svelte";

  import * as api from "./api";
  import NesContainer from "./NesContainer.svelte";

  export let score;

  let getPromise = api.fetchScores();

  const fetchScores = () => {
    getPromise = api.fetchScores();
  };

  onMount(fetchScores);
</script>

<NesContainer>
  <h2 class="title">Game over</h2>
  <div>You got {score} points.</div>
  <section>
    <h3>High scores</h3>
    {#await getPromise}
      <p>Fetching scores</p>
    {:then highScores}
      <div
        class="nes-table-responsive"
        style="width: max-content; margin-left: auto; margin-right: auto;"
      >
        <table class="nes-table is-bordered is-centered">
          <tbody>
            {#each highScores as entry}
              <tr>
                <td>{entry.name}</td>
                <td>{entry.score}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {:catch error}
      <div class="nes-text is-error">Got error "{error.message}"</div>
      <button class="nes-btn" on:click={fetchScores}>Retry</button>
    {/await}
  </section>
</NesContainer>

<style>
  section {
    margin: 2rem 0;
  }
</style>
