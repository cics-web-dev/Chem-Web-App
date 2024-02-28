<script>
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>{$page.status}</title>
</svelte:head>

<div>
    <h1>something went wrong, please refresh the page</h1>
</div>

<style>
    h1 {
        text-align: center;
    }
</style>
