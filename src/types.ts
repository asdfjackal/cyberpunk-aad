export type RollInput = {
  count: number
  sides: number
  modifier: number
}

export type RollOutput = {
  input: RollInput
  rolls: Array<number>
  total: number
}

export type Skill = {
  name: String
  modifier: number
}

export type Weapon = {
  name: String
  damage: RollInput
  skill: String
}

export type Armor = {
  max: number
  current: number
}

export type Ammo = {
  name: String
  count: number
}

export type Mook = {
  name: String
  initiative: RollInput
  weapons: Array<Weapon>
  skills: Array<Skill>
  head: Armor | null
  body: Armor | null
  hpMax: number
  hpCurrent: number
  move: number
  extra: String
}