<script lang="ts">
  function clearStorage() {
    localStorage.clear();
  }
</script>

<button on:click={clearStorage}>Reset Local Storage</button>
