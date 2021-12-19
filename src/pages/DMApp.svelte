<script lang="ts">
  import Peer, { DataConnection } from 'peerjs';

  import { v4 as uuid4 } from 'uuid';
  import { onMount } from 'svelte';
  import { roll } from '../stores';
  import type { RollOutput } from '../types';
  import MookEditor from '../components/MookEditor.svelte';
  import { hardenedBodyguard } from '../data/mooks';
  import Header from '../components/Header.svelte';
  import InfoSidebar from '../components/InfoSidebar.svelte';
  import Sidebar from '../components/Sidebar.svelte';

  const roomCode = uuid4();
  const peer = new Peer(roomCode, { debug: 2 });
  let conn: DataConnection;
  let conns: DataConnection[] = [];
  let rollHistory: RollOutput[] = [];

  let peers = 0;
  $: peers = conns.length;

  peer.on('connection', (c: DataConnection) => {
    c.on('open', () => {
      c.on('data', (data) => {
        if (data.message === 'roll') {
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
      message: 'history',
      value: rollHistory,
    });
  }
</script>

<main>
  <div class="header">
    <Header />
  </div>
  <Sidebar />
  <div class="content">
    <h1>Content</h1>
  </div>
  <InfoSidebar />
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 25% 50% 25%;
    grid-template-rows: 75px auto;
    height: 100%;
  }


  .header {
    grid-row: 1 / 1;
    grid-column: 1 / span 3 ;
  }
</style>
