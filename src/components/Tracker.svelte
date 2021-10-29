<script lang="ts">
  import type { RollOutput } from "../types";
  import RollOutputDisplay from "./RollOutputDisplay.svelte";

  export let rollHistory: RollOutput[];
</script>

<h3>
  {#if rollHistory.length >= 1}
    <RollOutputDisplay output={rollHistory[0]} />
  {:else}
    Nothing Rolled Yet
  {/if}
</h3>

<ul>
  {#each rollHistory.slice(1) as pastRoll (pastRoll)}
    <li>
      <RollOutputDisplay output={pastRoll} />
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
  }
</style>
