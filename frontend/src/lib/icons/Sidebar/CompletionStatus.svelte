<script lang="ts">
    // to indicate whether a question is completed or not
    export let isCompleted: boolean;
</script>

{#if isCompleted}
    <!-- Checkmark icon when question is completed (need to add color) -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-check"
        ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg
    >
{:else}
    <!-- Full circle icon when the question is not completed  -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-circle"
        ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
            d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
        /></svg
    >
{/if}
