<script lang="ts">
  import { stringToRollInput } from "../util";
  import Roller from "./Roller.svelte";

  let input = "";
  $: output = stringToRollInput(input);
</script>

<input bind:value={input} />
{#if output !== null}
  <Roller input={output} />
{/if}
