<script lang="ts">
  import Peer, { DataConnection } from "peerjs";

  import { v4 as uuid4 } from "uuid";
  import { onMount } from "svelte";
  import CleanLocal from "../components/CleanLocal.svelte";
  import Roller from "../components/Roller.svelte";
  import RollForm from "../components/RollForm.svelte";
  import Tracker from "../components/Tracker.svelte";
  import { roll } from "../stores";
  import type { RollOutput } from "../types";
  import MookList from "../components/MookList.svelte";

  const roomCode = uuid4();
  const peer = new Peer(roomCode, { debug: 2 });
  let conn: DataConnection;
  let conns: DataConnection[] = [];
  let rollHistory: RollOutput[] = [];

  let peers = 0;
  $: peers = conns.length;

  peer.on("connection", (c: DataConnection) => {
    c.on("open", () => {
      c.on("data", (data) => {
        if (data.message === "roll") {
          roll.set(data.value);
        }
      });
    });
    conn = c;
    conns.push(c);
    conns = conns;
  });

  roll.subscribe((newRoll) => {
    if (newRoll === null) return;
    rollHistory.unshift(newRoll);
    if (rollHistory.length > 5) {
      rollHistory.pop();
    }
    rollHistory = rollHistory;
  });

  function cleanConns() {
    conns = conns.filter((c) => c.open === true);
  }

  function updateConnections() {
    cleanConns();
    setTimeout(() => {
      updateConnections();
    }, 1000);
  }

  function pushData(data) {
    cleanConns();
    conns.forEach((c) => {
      c.send(data);
    });
  }

  onMount(() => {
    updateConnections();
  });

  $: {
    console.log(rollHistory);
    pushData({
      message: "history",
      value: rollHistory,
    });
  }
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
  <Tracker {rollHistory} />
  <p>{peers} Peers Connected</p>
  <a href="localhost:5000/room/{roomCode}">{roomCode}</a>
  <MookList />
</main>
