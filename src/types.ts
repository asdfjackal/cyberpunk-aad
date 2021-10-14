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

