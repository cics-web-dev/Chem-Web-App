<script lang="ts">
    import '$styles/Button.pcss';
    import NavBarLogIn from './NavBar+LogIn.svelte';
    import NavBarNotLogIn from './NavBar+NotLogIn.svelte';
    import { browser } from '$app/environment';

    import { isUserAuthenticated } from '$stores/UserAuthenticationStore';

    // if (browser) {
    //     isUserAuthenticated.set(sessionStorage.getItem('isAuthenticated') === 'true');
    // }

    let isLoggedIn: boolean;

    isUserAuthenticated.subscribe((value) => {
        // if (browser) {
        //     sessionStorage.setItem('isAuthenticated', JSON.stringify(value));
        // }
        isLoggedIn = value;
    });
</script>

{#if isLoggedIn}
    <NavBarLogIn />
{:else}
    <NavBarNotLogIn />
{/if}
