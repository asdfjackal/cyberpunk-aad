<script lang="ts">
  import type { RollInput } from "../types";
  export let input;
</script>

<span>
  Rolled {input.count}d{input.sides}{#if input.modifier !== 0}+{input.modifier}{/if}
</span>
