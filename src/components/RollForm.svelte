<script lang="ts">
  import type { RollInput } from "../types";

  import { rollInputToString, stringToRollInput } from "../util";

  export let rollInput: RollInput;
  let input = rollInputToString(rollInput);
  $: valid = stringToRollInput(input) !== null;
  $: {
    if (valid) {
      rollInput = stringToRollInput(input)!;
    }
  }
</script>

<input class={valid ? "valid" : "invalid"} bind:value={input} />

<style>
  input.invalid {
    border-color: #f44336;
  }
</style>
