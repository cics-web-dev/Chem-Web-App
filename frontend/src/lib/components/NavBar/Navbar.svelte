<script lang="ts">
    import '$styles/Button.pcss';
    import NavBarLogIn from './NavBar+LogIn.svelte';
    import NavBarNotLogIn from './NavBar+NotLogIn.svelte';

    import { userLoggedInStore } from '$stores/UserLoggedInStore';

    let isLoggedIn: boolean;

    userLoggedInStore.subscribe((value) => {
        isLoggedIn = value;
    })
</script>

{#if isLoggedIn}
    <NavBarLogIn />
{:else}
    <NavBarNotLogIn />
{/if}
