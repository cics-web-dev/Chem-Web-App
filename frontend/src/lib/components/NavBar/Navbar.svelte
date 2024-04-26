<script lang="ts">
    import '$styles/Button.pcss';
    import NavBarLogIn from './NavBar+LogIn.svelte';
    import NavBarNotLogIn from './NavBar+NotLogIn.svelte';

    import { page } from '$app/stores';
</script>

<!-- this user comes from user logins successfully, then hooks.server will decode the token and 
store the user data in the locals, then the locals will be passed to the page store -->
{#if $page.data.user}
    <NavBarLogIn />
{:else}
    <NavBarNotLogIn />
{/if}
