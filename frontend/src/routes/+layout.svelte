<script>
    import '../app.pcss';
    import Navbar from '$components/NavBar/Navbar.svelte';

    import chemdoodle from '$chemdoodle/ChemDoodleWeb.js?url';
    import '$chemdoodle/ChemDoodleWeb.css';

    import { afterNavigate } from '$app/navigation';

    afterNavigate(() => {
        // Thanks to Github open resource community from insivika:
        // He suggested to use the increased setTimeout delay to wait for the page to load before calling the autoInit
        // He used 1000 ms, but I found 200 ms to be sufficient
        // Some of the components are not being initialized properly, so we need to reinitialize them
        // Everytime we navigate to a new page, we need to reinitialize the preline JS logic to make it work
        // Credit: https://github.com/htmlstreamofficial/preline/issues/301
        setTimeout(() => window.HSStaticMethods.autoInit(), 200);
    });
</script>

<svelte:head>
    <script type="text/javascript" src={chemdoodle}></script>
    <title>Chem Web App</title>
</svelte:head>

<Navbar />

<main>
    <slot />
</main>
