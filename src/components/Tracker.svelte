<script lang="ts">
  import {roll} from '../stores'

  let lastRoll: string;

  let rollHistory: Array<string> = []
  
  roll.subscribe(newRoll => {
    if (lastRoll){
      rollHistory.push(lastRoll)
      if (rollHistory.length > 5){
        rollHistory = rollHistory.slice(1)
      }else{
        rollHistory = rollHistory
      }
    }
    lastRoll = newRoll
  })
</script>

<h3>{lastRoll !== null ? lastRoll : 'Nothing Rolled Yet'}</h3>
<ul>
  {#each rollHistory as pastRoll}
    <li>{pastRoll}</li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
  }
</style>