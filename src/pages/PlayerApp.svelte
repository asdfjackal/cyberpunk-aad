<script lang="ts">
  import WebRtcClient from "../components/WebRTCClient.svelte";

  export let id: string;
</script>

<WebRtcClient roomCode={id} />
