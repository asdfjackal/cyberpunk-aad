<script lang="ts">
  import Peer from "peerjs";
  import { v4 as uuid4 } from "uuid";
  const roomCode = uuid4();
  const peer = new Peer(roomCode);
  function handleClick() {}
</script>

<button on:click={handleClick}>Send Message</button>
<a href="localhost:5000/room/{roomCode}">{roomCode}</a>
