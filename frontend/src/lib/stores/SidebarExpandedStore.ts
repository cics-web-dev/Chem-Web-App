import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createIsSidebarOpenStore() {
    let sidebar;

    if (browser && localStorage.getItem('isSidebarOpen') === null) {
        sidebar = writable<boolean>(true);
    } else {
        sidebar = writable<boolean>(
            (browser && localStorage.getItem('isSidebarOpen') === 'true') || false
        );
    }

    const sidebarExpanded = sidebar;

    sidebarExpanded.subscribe((value) => {
        if (browser) return localStorage.setItem('isSidebarOpen', String(value));
    });

    const toggle = () => {
        console.log('toggling!');
        sidebarExpanded.update((value) => !value);
    };

    return {
        subscribe: sidebarExpanded.subscribe,
        update: sidebarExpanded.update,
        toggle
    };
}

export const sidebarExpanded = createIsSidebarOpenStore();
