<script lang="ts">
  import Roller from "./components/Roller.svelte";
  import Tracker from "./components/Tracker.svelte";
</script>

<main>
  <Roller />
  <Roller
    input={{
      count: 5,
      sides: 6,
      modifier: 1,
    }}
  />
  <Tracker />
</main>
