<script lang="ts">
  import {roll} from '../stores.js'

  export let count: number = 1, sides: number = 20, modifier: number = 0;

  function rollDice(){
    let rolls: Array<number> = []
    for (let i = 0; i < count; i++){
      rolls.push(Math.floor(Math.random() * sides) + 1)
    }
    const total: number = rolls.reduce((total, current) => total + current) + modifier;

    roll.set(`Rolled ${count}d${sides}+${modifier}: ${total} [ ${rolls.join(' ')} ]`)
  }
</script>

<button on:click={rollDice}>Roll {count}d{sides}+{modifier}</button>