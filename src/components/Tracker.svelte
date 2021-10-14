<script lang="ts">
  import { roll } from "../stores";
  import type { RollOutput } from "../types";
  import RollOutputDisplay from "./RollOutputDisplay.svelte";

  let lastRoll: RollOutput = null;

  let rollHistory: Array<RollOutput> = [];

  roll.subscribe((newRoll) => {
    if (lastRoll !== null) {
      rollHistory.unshift(lastRoll);
      if (rollHistory.length > 5) {
        rollHistory.pop();
      }
      rollHistory = rollHistory;
    }
    lastRoll = newRoll;
  });
</script>

<h3>
  {#if lastRoll !== null}
    <RollOutputDisplay output={lastRoll} />
  {:else}
    Nothing Rolled Yet
  {/if}
</h3>
<ul>
  {#each rollHistory as pastRoll (pastRoll)}
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
