import type { Mook } from '../types';

const hardenedBodyguard: Mook = {
  name: 'Hardened Bodyguard',
  skills: [
    { name: 'Athletics', base: 9 },
    { name: 'Brawling', base: 13 },
    { name: 'Concentration', base: 6 },
    { name: 'Conversation', base: 5 },
    { name: 'Drive Land Vehicle', base: 10 },
    { name: 'Education', base: 6 },
    { name: 'Endurance', base: 9 },
    { name: 'Evastion', base: 8 },
    { name: 'First Aid', base: 4 },
    { name: 'Human Perception', base: 5 },
    { name: 'Interrogation', base: 6 },
    { name: 'Language (Native)', base: 8 },
    { name: 'Language (Streetslang)', base: 6 },
    { name: 'Local Expert (Your Home)', base: 6 },
    { name: 'Perception', base: 10 },
    { name: 'Persuasion', base: 6 },
    { name: 'Resist Torture/Drug', base: 8 },
    { name: 'Shoulder Arms', base: 10 },
    { name: 'Stealth', base: 8 }
  ],
  stats: {
    int: 4,
    ref: 6,
    dex: 6,
    tech: 2,
    cool: 2,
    will: 4,
    luck: null,
    move: 5,
    body: 7,
    emp: 3
  },
  hitpoints: 30,
  guns: [
    {
      name: 'Poor Quality Shotgun',
      damage: {
        count: 5,
        sides: 6,
        modifier: 0
      },
      skill: 'Shoulder Arms',
      magazine: 4,
      rof: 1,
      hands: 2,
      concealable: false,
      modesAndFeatures: 'Shotgun Shell'
    }
  ],
  weapons: [
    {
      name: 'Brawling',
      damage: {
        count: 3,
        sides: 6,
        modifier: 0
      },
      skill: 'Brawling'
    }
  ],
  headArmor: {
    name: 'Light Armorjack',
    sp: 11
  },
  bodyArmor: {
    name: 'Light Armorjack',
    sp: 11
  },
  equipment: [
    'Slug Ammo x25',
    'Radio Communicator'
  ]
}

const emptyMook: Mook = {
  name: '',
  skills: [],
  stats: {
    int: 0,
    ref: 0,
    dex: 0,
    tech: 0,
    cool: 0,
    will: 0,
    luck: null,
    move: 0,
    body: 0,
    emp: 0
  },
  hitpoints: 0,
  guns: [],
  weapons: [],
  headArmor: null,
  bodyArmor: null,
  equipment: []
}

export { hardenedBodyguard, emptyMook };