<script lang="ts">
    import BeakerIcon from '$icons/Sidebar/Beaker.svelte';
    import ArrowUpIcon from '$icons/Sidebar/ArrowUp.svelte';
    import ArrowDownIcon from '$icons/Sidebar/ArrowDown.svelte';
    import SidebarQuestionList from './SidebarQuestionList.svelte';

    export let chapterData: any;
    export let chapterIndex: number;
</script>

<li class="hs-accordion" id="account-accordion">
    <button
        type="button"
        class="hs-accordion-toggle flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-start text-sm text-slate-700 hover:bg-gray-100 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hs-accordion-active:text-white"
    >
        <BeakerIcon />

        {chapterIndex}. {chapterData.chapter}

        <ArrowUpIcon />

        <ArrowDownIcon />
    </button>

    <SidebarQuestionList questions={chapterData.questions} />
</li>
