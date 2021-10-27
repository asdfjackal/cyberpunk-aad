<script lang="ts">
  import Peer, { DataConnection } from "peerjs";
  import config from "../config";
  export let roomCode;
  let connected = false;
  let lastData = "No data yet";
  const peer = new Peer(null, { debug: 2 });
  let conn: DataConnection;

  function handleClick() {
    conn = peer.connect(roomCode, { reliable: true });
    conn.on("open", () => {
      connected = true;
      conn.on("data", (data) => {
        lastData = data;
      });
    });
  }
  function handleClick2() {
    console.log(conn);
  }
</script>

{#if connected}
  <p>Connected</p>
{:else}
  <p>Not Connected</p>
{/if}
<p>{lastData}</p>
<button on:click={handleClick}>Connection Status</button>
<button on:click={handleClick2}>Connection Status</button>
