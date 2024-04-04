<script lang="ts">
    import DisplayQuestion from '$components/Questions/DisplayQuestion.svelte';
    import { sidebarExpanded } from '$stores/SidebarExpandedStore';
</script>

<!-- This is where we display the question -->
<div class="w-full px-4 pt-2 sm:px-6 md:px-8" class:content-expanded={$sidebarExpanded}>
    <DisplayQuestion />
</div>

<style lang="postcss">
    .content-expanded {
        @apply lg:ps-72;
    }
</style>
