<script lang="ts">
    import BeakerIcon from '$icons/Sidebar/Beaker.svelte';
    import ArrowUpIcon from '$icons/Sidebar/ArrowUp.svelte';
    import ArrowDownIcon from '$icons/Sidebar/ArrowDown.svelte';
    import SidebarQuestionList from './SidebarQuestionList.svelte';

    import '$styles/Button.pcss';

    import type { SidebarMetadata } from '$types/sidebarMetaData';

    // the metadata of a chapter
    export let chapterMetaData: SidebarMetadata;

    // the chapter number (in base 1)
    export let chapterIndex: number;
</script>

<li class="hs-accordion">
    <button type="button" class="hs-accordion-toggle sidebar-chapter-button-style">
        <BeakerIcon />

        {chapterIndex}. {chapterMetaData.chapter}

        <ArrowUpIcon />

        <ArrowDownIcon />
    </button>

    <SidebarQuestionList questionsMetadata={chapterMetaData.questions} />
</li>
