<script lang="ts">
  import { Router, Route } from 'svelte-routing';
  import DmApp from './pages/DMApp.svelte';
  import PlayerApp from './pages/PlayerApp.svelte';

  export let url = '';
</script>

<Router {url}>
  <Route path="/" component={DmApp} />
  <Route path="room/:id" component={PlayerApp} />
</Router>
