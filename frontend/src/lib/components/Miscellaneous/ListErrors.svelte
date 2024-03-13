<script lang="ts">
    export let errors: string[];
</script>

<!-- a simple list groups that show a list of errors -->
{#if errors}
    <ul class="error-color-style list-inside list-disc">
        {#each errors as error}
            <li>{error}</li>
        {/each}
    </ul>
{/if}

<style lang="postcss">
    .error-color-style {
        @apply text-red-500 dark:text-red-500;
    }
</style>
