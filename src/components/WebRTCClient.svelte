<script lang="ts">
  import Peer from "peerjs";
  import peerConfig from "../peerConfig";
  export let roomCode;
  let lastData = "No data yet";
  const peer = new Peer();
  function handleClick() {}
</script>

<p>{lastData}</p>
<button on:click={handleClick}>Connection Status</button>
