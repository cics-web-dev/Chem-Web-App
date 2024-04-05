<script lang="ts">
    import '$styles/Button.pcss';
    import NavBarLogIn from './NavBar+LogIn.svelte';
    import NavBarNotLogIn from './NavBar+NotLogIn.svelte';
    import { userAuthenticated } from '$stores/UserAuthenticationStore';
    import { browser } from '$app/environment';

    let isLoggedIn: boolean = false; // a boolean to check if the user is logged in or not

    // since we enable SSR and sessionStorage only exists on browser, therefore we need to check if browser exists
    if (browser) {
        userAuthenticated.set(sessionStorage.getItem('isAuthenticated') === 'true');
    }

    userAuthenticated.subscribe((value) => {
        isLoggedIn = value;
        if (browser) {
            sessionStorage.setItem('isAuthenticated', JSON.stringify(isLoggedIn));
        }
    });
</script>

{#if isLoggedIn}
    <NavBarLogIn />
{:else}
    <NavBarNotLogIn />
{/if}
