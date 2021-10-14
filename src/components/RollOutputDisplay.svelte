<script lang="ts">
  import type { RollOutput } from "../types";
  import RollNotation from "./RollNotation.svelte";

  export let output: RollOutput;
</script>

<span>
  <RollNotation input={output.input} />. Result: {output.total} [ {output.rolls.join(
    " "
  )} ]
</span>
