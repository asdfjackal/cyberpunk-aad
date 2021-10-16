<script lang="ts">
  import { roll } from "../stores.js";
  import type { RollInput } from "../types.js";
  import { rollDice } from "../util.js";

  export let input: RollInput = {
    count: 1,
    sides: 20,
    modifier: 0,
  };

  let { count, sides, modifier } = input;

  function onRoll() {
    let output = rollDice(input);

    roll.set(output);
  }
</script>

<button on:click={onRoll}>
  {#if input.modifier === 0}
    Roll {input.count}d{input.sides}
  {:else if modifier < 0}
    Roll {input.count}d{input.sides}{input.modifier}
  {:else}
    Roll {input.count}d{input.sides}+{input.modifier}
  {/if}
</button>
