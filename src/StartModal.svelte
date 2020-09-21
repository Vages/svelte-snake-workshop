<script>
  import NesContainer from "./NesContainer.svelte";
</script>

<style>
  div {
    margin: 3rem 0;
  }
</style>

<NesContainer>
  <h1>Snake</h1>
  <div>
    <p>Eat 🍎, not yourself</p>
    <p>Don't crash</p>
  </div>
  <div>
    <p>WASD and arrow keys change direction</p>
    <p>Space pauses</p>
  </div>
  <p><strong>Any key to start</strong></p>
</NesContainer>
