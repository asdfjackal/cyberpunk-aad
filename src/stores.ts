import { Writable, writable } from 'svelte/store';
import type { RollOutput } from './types';

export const roll : Writable<RollOutput> = writable(null)