<script lang="ts">
    import '$styles/Button.pcss';
    import NavBarLogIn from './NavBar+LogIn.svelte';
    import NavBarNotLogIn from './NavBar+NotLogIn.svelte';
    import { browser } from '$app/environment';

    import { isUserAuthenticated } from '$stores/UserAuthenticationStore';
    import ArrowDown from '$icons/Sidebar/ArrowDown.svelte';

    // if (browser) {
    //     isUserAuthenticated.set(sessionStorage.getItem('isAuthenticated') === 'true');
    //     console.log("HELLO")
    // }

    let loggedIn: boolean = true;

    $: console.log('isUserAuthenticated: ', loggedIn);

    // isUserAuthenticated.subscribe((value) => {
    //     if (browser) {
    //         console.log("am i logged in? ", value);
    //         sessionStorage.setItem('isAuthenticated', JSON.stringify(value));
    //     }
    //     loggedIn = value;
    // });
</script>

<button
    on:click={() => {
        loggedIn = !loggedIn;
    }}
>
    try me
</button>
{#if loggedIn}
    <NavBarLogIn />
{:else}
    <NavBarNotLogIn />
{/if}
