import type { RollInput, RollOutput } from './types';

export function rollDice(input: RollInput): RollOutput {
    let rolls: Array<number> = [];
    for (let i = 0; i < input.count; i++) {
      rolls.push(Math.floor(Math.random() * input.sides) + 1);
    }
    const total: number =
      rolls.reduce((total, current) => total + current) + input.modifier;
    return {
      input,
      rolls,
      total
    }
}

export function stringToRollInput(input: string): RollInput | null {
  const regex = /^(\d+)d(\d+)([\+-]\d+)?$/
  const found = input.match(regex)
  if (found === null) return null
  console.log(found)
  const output = {
    count: parseInt(found[1]),
    sides: parseInt(found[2]),
    modifier: found[3] === undefined ? 0 : parseInt(found[3])
  }
  return output
}