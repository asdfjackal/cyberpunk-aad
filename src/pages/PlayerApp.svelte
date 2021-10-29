<script lang="ts">
  import Peer, { DataConnection } from "peerjs";
  import RollForm from "../components/RollForm.svelte";
  import Tracker from "../components/Tracker.svelte";
  import { roll } from "../stores";
  import type { RollOutput } from "../types";
  export let id: string;
  const peer = new Peer(null, { debug: 2 });
  let conn: DataConnection;
  let rollHistory: RollOutput[] = [];

  peer.on("open", () => {
    conn = peer.connect(id, { reliable: true });
    conn.on("open", () => {
      conn.on("data", (data) => {
        if (data.message === "history") {
          rollHistory = data.value;
        }
      });
    });
  });

  roll.subscribe((newRoll) => {
    if (conn !== undefined && conn.open === true) {
      conn.send({ message: "roll", value: newRoll });
    }
  });
</script>

<RollForm />
<Tracker {rollHistory} />
