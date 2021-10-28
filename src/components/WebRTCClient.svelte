<script lang="ts">
  import Peer, { DataConnection } from "peerjs";
  export let roomCode;
  let connected = false;
  let lastData = "No data yet";
  const peer = new Peer(null, { debug: 2 });
  let conn: DataConnection;
  peer.on("open", (id) => {
    conn = peer.connect(roomCode, { reliable: true });
    conn.on("open", () => {
      connected = true;
      conn.on("data", (data) => {
        lastData = data;
      });
    });
  });
  function handleClick() {}
</script>

{#if connected}
  <p>Connected</p>
{:else}
  <p>Not Connected</p>
{/if}
<p>{lastData}</p>
<button on:click={handleClick}>Connection Status</button>
