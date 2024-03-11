<script>
    import '../app.pcss';
    import Navbar from '$components/NavBar/Navbar.svelte';

    import chemdoodle from '$chemdoodle/ChemDoodleWeb.js?url';
    import '$chemdoodle/ChemDoodleWeb.css';
</script>

<svelte:head>
    <script type="text/javascript" src={chemdoodle}></script>
</svelte:head>

<Navbar />

<main>
    <slot />
</main>
