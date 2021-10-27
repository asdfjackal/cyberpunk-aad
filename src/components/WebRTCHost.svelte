<script lang="ts">
  import Peer, { DataConnection } from "peerjs";
  import { v4 as uuid4 } from "uuid";
  const roomCode = uuid4();
  let connected = false;
  const peer = new Peer(roomCode, { debug: 2 });
  let conn: DataConnection;
  peer.on("connection", (c: DataConnection) => {
    conn = c;
    conn.on("open", () => {
      connected = true;
    });
  });
  function handleClick() {
    conn.send("test");
    console.log(conn);
  }
</script>

{#if connected}
  <p>Connected</p>
{:else}
  <p>Not Connected</p>
{/if}
<button on:click={handleClick}>Send Message</button>
<a href="localhost:5000/room/{roomCode}">{roomCode}</a>
