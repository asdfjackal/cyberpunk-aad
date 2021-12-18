import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Mook, RollOutput } from './types';

export const roll: Writable<RollOutput> = writable(null)

export const mookList: Writable<Map<string, Mook>> = writable(new Map())