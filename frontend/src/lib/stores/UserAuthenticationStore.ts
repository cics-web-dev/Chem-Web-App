import { writable } from 'svelte/store';

function createUserLoggedInStore() {
    const { subscribe, set } = writable<boolean>(false);

    return {
        subscribe,
        login: () => set(true),
        logout: () => set(false),
        set: (value: boolean) => set(value)
    };
}

export const isUserAuthenticated = createUserLoggedInStore();
