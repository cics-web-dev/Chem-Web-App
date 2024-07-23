<script lang="ts">
    import StatusIcon from '$icons/Sidebar/CompletionStatus.svelte';
    import type { QuestionMetadata } from '$types/SidebarMetaData';

    export let questionsMetadata: QuestionMetadata[];
</script>

<div
    id="account-accordion"
    class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
>
    <ul class="pr-px ps-2 pt-2">
        {#each questionsMetadata as metadata}
            <li class="pb-px">
                <a class="sidebar-question-list-item" href="/question/{metadata.id}">
                    <StatusIcon isCompleted={metadata.isCompleted} />
                    {metadata.name}
                </a>
                <!-- will need to find a bookmark icon -->
                <!-- <button on:click={() => console.log('A')}>bookmark</button> -->
            </li>
        {/each}
    </ul>
</div>

<style lang="postcss">
    .sidebar-question-list-item {
        @apply flex items-center gap-x-4 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
    }

    /* li {
        @apply flex items-center justify-start gap-x-3.5;
    } */

    /* button {
        margin-left: auto;
        @apply rounded-lg px-2.5 py-1 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
    } */
</style>
