<script>
    import '../app.pcss';
    // import { afterNavigate } from "$app/navigation";
    import Navbar from '$components/NavBar/Navbar.svelte';

    // afterNavigate(() => {
    //   window.HSStaticMethods.autoInit();
    // });
</script>

<Navbar />

<main>
    <slot />
</main>
