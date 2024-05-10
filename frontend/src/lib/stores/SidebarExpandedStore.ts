import { writable } from 'svelte/store';

function createIsSidebarOpenStore() {
    const { subscribe, update } = writable<boolean>(true);

    return {
        subscribe,
        set: (value: boolean) => update(() => value),
    };
}

export const sidebarExpanded = createIsSidebarOpenStore();
