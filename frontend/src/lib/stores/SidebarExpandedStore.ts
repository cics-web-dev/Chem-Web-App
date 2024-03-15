import { writable } from 'svelte/store';

function createIsSidebarOpenStore() {
    const { subscribe, update } = writable<boolean>(true);

    return {
        subscribe,
        toggle: () => update((value) => !value)
    };
}

export const sidebarExpanded = createIsSidebarOpenStore();
