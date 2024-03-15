import { writable } from 'svelte/store';

function createUserLoggedInStore() {
  
    const { subscribe, update } = writable<boolean>(false);

    return {
        subscribe,
        toggle: () => update((value) => !value),
    }
}

export const userLoggedInStore = createUserLoggedInStore();