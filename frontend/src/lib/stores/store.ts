import { writable } from 'svelte/store';

export const selected_store = writable<number[]>([]);
export const isSidebarOpenStore = writable<boolean>(true);
