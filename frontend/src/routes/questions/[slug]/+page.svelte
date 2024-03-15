<script lang="ts">
    import DisplayQuestion from '$components/DisplayQuestion.svelte';
    import { isSidebarOpenStore } from '$stores/store';

    let isSidebarOpen: boolean;

    isSidebarOpenStore.subscribe((value) => {
        isSidebarOpen = value;
    });
</script>

<!-- This is where we display the question -->
<div class="w-full px-4 pt-2 sm:px-6 md:px-8" class:question-slider-style={isSidebarOpen}>
    <DisplayQuestion />
</div>

<style lang="postcss">
    .question-slider-style {
        @apply lg:ps-72;
    }
</style>
