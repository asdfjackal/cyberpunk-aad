<script lang="ts">
  import Peer, { DataConnection } from "peerjs";
  export let id: string;
  let connected = false;
  let lastData = "No data yet";
  const peer = new Peer(null, { debug: 2 });
  let conn: DataConnection;
  peer.on("open", () => {
    conn = peer.connect(id, { reliable: true });
    conn.on("open", () => {
      connected = true;
      conn.on("data", (data) => {
        lastData = data;
      });
    });
  });
  function handleClick() {}
</script>

<p>{lastData}</p>
