<script lang="ts">
    import '$styles/Button.pcss';
    import NavBarLogIn from './NavBar+LogIn.svelte';
    import NavBarNotLogIn from './NavBar+NotLogIn.svelte';

    let isLogged: boolean = false;
</script>

{#if isLogged}
    <NavBarLogIn />
{:else}
    <NavBarNotLogIn />
{/if}
