<script>
  import Item from "./Item.svelte";

let count = 0
</script>
<div class="top-picks">
<h2>TOP PICKS:</h2>
<div class="top-picks-row">
  <Item/>
  <Item/>
</div>
</div>

<style>
h2 {
  font-family: 'Press Start 2P';
  font-weight: 400;
  margin-left: 10px;
}
.top-picks {
  
  margin-top: 60px;
  padding: 10px;
  background-color: rgb(96, 96, 96);
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 1000px;
}
.top-picks-row {
  display: flex;
}
</style>
