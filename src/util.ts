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