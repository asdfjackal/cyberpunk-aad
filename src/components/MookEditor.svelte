<script lang="ts">
  import { cloneDeep } from 'lodash';
  import { mount_component } from 'svelte/internal';
  import type { Mook } from '../types';
  import RollForm from './RollForm.svelte';
  export let baseMook: Mook;

  let mook: Mook = cloneDeep(baseMook);

  $: mook.hitpoints =
    10 + 5 * Math.ceil((mook.stats.body + mook.stats.will) / 2);

  function addGun() {
    mook.guns = [
      ...mook.guns,
      {
        name: '',
        damage: {
          count: 1,
          sides: 6,
          modifier: 0,
        },
        skill: '',
        magazine: 0,
        rof: 0,
        hands: 1,
        concealable: false,
        modesAndFeatures: '',
      },
    ];
  }

  function deleteGun(index: number) {
    mook.guns.splice(index, 1);
    mook.guns = mook.guns;
  }

  function addWeapon() {
    mook.weapons = [
      ...mook.weapons,
      {
        name: '',
        damage: {
          count: 1,
          sides: 6,
          modifier: 0,
        },
        skill: '',
      },
    ];
  }

  function deleteWeapon(index: number) {
    mook.weapons.splice(index, 1);
    mook.weapons = mook.weapons;
  }

  function addEquipment() {
    mook.equipment = [...mook.equipment, ''];
  }

  function deleteEquipment(index: number) {
    mook.equipment.splice(index, 1);
    mook.equipment = mook.equipment;
  }
</script>

<div class="mook-editor-container">
  <div class="stat-row">
    <input
      class="mook-name"
      type="text"
      placeholder="Mook Name"
      bind:value={mook['name']}
    />
  </div>
  <div class="stat-row">
    {#each Object.keys(mook.stats).slice(0, 5) as key}
      <div class="stat">
        <label for="key">{key.toUpperCase()}</label>
        <input name="key" type="number" bind:value={mook.stats[key]} />
      </div>
    {/each}
  </div>
  <div class="stat-row">
    {#each Object.keys(mook.stats).slice(5) as key}
      <div class="stat">
        <label for="key">{key.toUpperCase()}</label>
        {#if key === 'luck'}
          <input name="key" type="number" disabled />
        {:else}
          <input name="key" type="number" bind:value={mook.stats[key]} />
        {/if}
      </div>
    {/each}
  </div>
  <div class="stat-row">
    <div class="big-stat">
      <label for="hp">Hit Points</label>
      <input name="hp" type="number" value={mook.hitpoints} disabled />
    </div>
    <div class="big-stat">
      <label for="wound">Seriously Wounded</label>
      <input
        name="wound"
        type="number"
        value={Math.ceil(mook.hitpoints / 2)}
        disabled
      />
    </div>
    <div class="big-stat">
      <label for="hp">Death Save</label>
      <input name="hp" type="number" value={mook.stats.body} disabled />
    </div>
  </div>
  <p>Guns</p>
  <table>
    <tr>
      <th>Name</th>
      <th>Damage</th>
      <th>Skill</th>
      <th>Magazine</th>
      <th>ROF</th>
      <th>Hands</th>
      <th>Concealable</th>
      <th>Modes and Features</th>
      <th />
    </tr>
    {#each mook.guns as gun, i}
      <tr>
        <td><input type="text" bind:value={gun.name} /></td>
        <td><RollForm bind:rollInput={gun.damage} /></td>
        <td><input type="text" bind:value={gun.skill} /></td>
        <td><input type="number" bind:value={gun.magazine} /></td>
        <td><input type="number" bind:value={gun.rof} /></td>
        <td><input type="number" bind:value={gun.hands} /></td>
        <td><input type="checkbox" bind:checked={gun.concealable} /></td>
        <td><input type="text" bind:value={gun.modesAndFeatures} /></td>
        <td><button on:click={() => deleteGun(i)}>Delete</button></td>
      </tr>
    {/each}
  </table>
  <button on:click={addGun}>Add Gun</button>

  <p>Weapons</p>
  <table>
    <tr>
      <th>Name</th>
      <th>Damage</th>
      <th>Skill</th>
      <th />
    </tr>
    {#each mook.weapons as weapon, i}
      <tr>
        <td><input type="text" bind:value={weapon.name} /></td>
        <td><RollForm bind:rollInput={weapon.damage} /></td>
        <td><input type="text" bind:value={weapon.skill} /></td>
        <td><button on:click={() => deleteWeapon(i)}>Delete</button></td>
      </tr>
    {/each}
  </table>
  <button on:click={addWeapon}>Add Weapon</button>

  <p>Head Armor</p>
  <div class="stat-row">
    <input type="text" bind:value={mook.headArmor.name} />
    <input type="number" bind:value={mook.headArmor.sp} />
  </div>
  <p>Body Armor</p>
  <div class="stat-row">
    <input type="text" bind:value={mook.bodyArmor.name} />
    <input type="number" bind:value={mook.bodyArmor.sp} />
  </div>

  <p>Equipment</p>
  <table>
    <tr>
      <th>Name</th>
      <th />
    </tr>
    {#each mook.equipment as item, i}
      <tr>
        <td><input type="text" bind:value={item} /></td>
        <td><button on:click={() => deleteEquipment(i)}>Delete</button></td>
      </tr>
    {/each}
  </table>
  <button on:click={addEquipment}>Add Equipment</button>
</div>

<style>
  .mook-editor-container {
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 95%;
    padding: 10px;
    margin: auto;
  }

  .stat-row {
    display: flex;
    flex-direction: row;
    width: parent;
  }

  .stat > input {
    width: 87.5px;
    margin-right: 5px;
  }

  .big-stat > input {
    width: 150px;
    margin-right: 5px;
  }

  .mook-name {
    width: 100%;
  }

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    padding: 8px;
  }
  th {
    text-align: center;
  }

  td > input[type='number'] {
    width: 75px;
  }

  input:disabled {
    color: #333;
  }
</style>
