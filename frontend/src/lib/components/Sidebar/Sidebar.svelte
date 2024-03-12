<script lang="ts">
    import HamburgerIcon from '$icons/Sidebar/Hamburger.svelte';
    import SidebarChapterList from './SidebarChapterList.svelte';

    let sidebarData = [
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
</script>

<!-- Navigation Toggle -->
<button
    type="button"
    class="align-middle text-gray-500 hover:text-gray-600"
    data-hs-overlay="#docs-sidebar"
    aria-controls="docs-sidebar"
    aria-label="Toggle navigation"
>
    <span class="sr-only">Navigate Chapters</span>
    <HamburgerIcon />
</button>
<!-- End Navigation Toggle -->

<div
    id="docs-sidebar"
    class="hs-overlay w-100 fixed bottom-0 start-0 top-0 z-[60] hidden -translate-x-full transform overflow-y-auto border-e border-gray-200 bg-white pb-10 pt-7 transition-all duration-300 hs-overlay-open:translate-x-0 dark:border-gray-700 dark:bg-gray-800 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-slate-700 [&::-webkit-scrollbar]:w-2"
>
    <div class="px-6">
        <a class="flex-none text-xl font-semibold dark:text-white" href="/" aria-label="Chapters"
            >Chapters</a
        >
    </div>
    <nav
        class="hs-accordion-group flex w-full flex-col flex-wrap overflow-x-visible p-6"
        data-hs-accordion-always-open
    >
        <ul class="space-y-1.5">
            {#each sidebarData as chapterData, index}
                <SidebarChapterList {chapterData} chapterIndex={index + 1} />
            {/each}
        </ul>
    </nav>
</div>
