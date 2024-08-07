<script lang="ts">
    import { fade } from 'svelte/transition';

    import SidebarChapterList from './SidebarChapterList.svelte';
    import SidebarLeftCollapseIcon from '$icons/Sidebar/SidebarLeftCollapseSlide.svelte';

    import type { SidebarMetadata } from '$types/sidebarMetaData';
    import { sidebarExpanded } from '$stores/SidebarExpandedStore';

    let sidebarMetaData: SidebarMetadata[] = [
        {
            chapter: 'Structure and Bonding',
            questions: [
                {
                    id: '1234',
                    name: 'Sub-chapter 1.1',
                    isCompleted: true,
                    isBookmarked: false
                }
            ]
        },
        {
            chapter: 'Polar Covalent Bonds',
            questions: [
                {
                    id: '1237',
                    name: 'Sub-chapter 2.1',
                    isCompleted: false,
                    isBookmarked: false
                },
                {
                    id: '1238',
                    name: 'Sub-chapter 2.2',
                    isCompleted: false,
                    isBookmarked: false
                },
                {
                    id: '1238',
                    name: 'Sub-chapter 2.3',
                    isCompleted: false,
                    isBookmarked: false
                }
            ]
        }
    ];

    // the store to keep track of the inner width of the window
    $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div
    id="application-sidebar"
    class="transition-x fixed bottom-0 start-0 top-0 z-[60] w-72 -translate-x-72 transform border-e border-gray-200 bg-white pb-10 pt-4 transition-all duration-150 lg:end-auto dark:border-gray-700 dark:bg-gray-800 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-slate-700 [&::-webkit-scrollbar]:w-2"
    class:sidebar-visibility={$sidebarExpanded}
>
    <div class="flex items-center justify-between px-6">
        <a class="text-xl font-semibold dark:text-white" href="/" aria-label="Chapters">Chapters</a>

        <!-- we manually expand the sidebar using our custom logic when the window size >= 1024 pixels -->
        {#if innerWidth >= 1024}
            <button class="dark:text-white" on:click={() => sidebarExpanded.update((value) => true)}>
                <SidebarLeftCollapseIcon />
            </button>
        {/if}
    </div>

    <nav
        class="hs-accordion-group flex w-full flex-col flex-wrap p-6"
        data-hs-accordion-always-open
    >
        <ul class="space-y-1.5">
            {#each sidebarMetaData as metaData, index}
                <!-- chapter index + 1 because array is based 0, and we need number 1 for index 0 -->
                <SidebarChapterList chapterMetaData={metaData} chapterIndex={index + 1} />
            {/each}
        </ul>
    </nav>
</div>

{#if innerWidth && innerWidth < 1024 && $sidebarExpanded}
    <button
        class="absolute right-0 top-0 z-0 h-full w-full bg-slate-800 opacity-50"
        in:fade
        out:fade
        on:click={() => sidebarExpanded.update((value) => true)}
        aria-label="Close Sidebar"
    >
    </button>
{/if}

<style lang="postcss">
    .sidebar-visibility {
        @apply translate-x-0;
    }
</style>
