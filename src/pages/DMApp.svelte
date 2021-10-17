<script lang="ts">
  import CleanLocal from "../components/CleanLocal.svelte";
  import Roller from "../components/Roller.svelte";
  import RollForm from "../components/RollForm.svelte";
  import Tracker from "../components/Tracker.svelte";
  import WebRtcTest from "../components/WebRTCHost.svelte";
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
  <CleanLocal />
  <Tracker />
  <RollForm />
  <br />
  <WebRtcTest />
</main>
