<script lang="ts">
  import Peer, { DataConnection } from "peerjs";

  import { v4 as uuid4 } from "uuid";
  import CleanLocal from "../components/CleanLocal.svelte";
  import Roller from "../components/Roller.svelte";
  import RollForm from "../components/RollForm.svelte";
  import Tracker from "../components/Tracker.svelte";

  const roomCode = uuid4();
  let connected = false;
  const peer = new Peer(roomCode, { debug: 2 });
  let conn: DataConnection;
  let conns: DataConnection[] = [];

  let peers = 0;
  $: peers = conns.length;

  peer.on("connection", (c: DataConnection) => {
    c.on("open", () => {
      connected = true;
    });
    conn = c;
    conns.push(c);
    conns = conns;
  });

  function cleanConns() {
    conns = conns.filter((c) => c.open === true);
  }

  function handleClick() {
    cleanConns();
    conns.forEach((c) => {
      c.send("test");
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
  <Tracker />
  <RollForm />
  <br />
  <p>{peers} Peers Connected</p>
  <button on:click={handleClick}>Send Message</button>
  <a href="localhost:5000/room/{roomCode}">{roomCode}</a>
</main>
