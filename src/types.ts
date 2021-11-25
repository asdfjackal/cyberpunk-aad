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

export type Stats = {
  int: number
  ref: number
  dex: number
  tech: number
  cool: number
  will: number
  luck: number | null
  move: number
  body: number
  emp: number
}

export type Skill = {
  name: string
  base: number
}

export type Weapon = {
  name: string
  damage: RollInput
  skill: string
}

export type Gun = Weapon & {
  magazine: number
  rof: number
  hands: number
  concelable: boolean
  modesAndFeatures: Array<string>
}

export type Armor = {
  name: string
  sp: number
}

export type Mook = {
  name: string
  skills: Array<Skill>
  stats: Stats
  guns: Array<Gun>
  weapons: Array<Weapon>
  headArmor: Armor
  bodyArmor: Armor
  equipment: Array<string>
}
