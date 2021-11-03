<script lang="ts">
  import { mookList } from "../stores";

  let name = "";
  let selected = "";

  function handleCreate() {
    $mookList = $mookList.set(name, { name });
  }
</script>

<div>
  <select bind:value={selected} size="5">
    {#each [...$mookList.keys()] as name (name)}
      <option value={name}>{name}</option>
    {/each}
  </select>
  <br />
  <input type="text" bind:value={name} />
  <button on:click={handleCreate}>Create</button>
</div>

<style>
  div {
    width: min-content;
  }

  select {
    width: 100%;
  }
</style>
