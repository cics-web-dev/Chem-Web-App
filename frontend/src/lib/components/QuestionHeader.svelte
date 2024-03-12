<script lang="ts">
    import RedoIcon from '$icons/Redo.svelte';
    import TwoDIcon from '$icons/2D-stack.svelte';
    import ThreeDIcon from '$icons/3D-cube.svelte';

    import '$styles/Button.pcss';

    /* instead of having direct export of the entire question,
     we only select the properties we need. Since the question
     has the mol file, which is relatively large, therefore passing the necessary data to a component
     can reduce memory usage and optimize the performance of rendering */
    export let chapter: number;
    export let question: number;
    export let title: string;
    export let description: string;

    let isTwoDimensional: boolean = true;
</script>

<div class="mx-auto max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8">
    <div class="grid justify-center gap-3 md:grid-cols-2 md:items-center md:justify-between">
        <div class="text-center md:text-start">
            <h1 class="text-ls uppercase tracking-wider text-black">
                {chapter}.{question} : {title}
            </h1>
            <h2 class="mt-2 font-medium text-black">
                {description}
            </h2>
        </div>

        <div class="mt-3 gap-4 text-center md:flex md:items-center md:justify-end md:text-start">
            <button type="button" class="question-header-button-style">
                <RedoIcon />
                Redo
            </button>

            <button
                type="button"
                class="question-header-button-style"
                on:click={() => (isTwoDimensional = !isTwoDimensional)}
            >
                {#if isTwoDimensional}
                    <TwoDIcon />
                    2D display
                {:else}
                    <ThreeDIcon />
                    3D display
                {/if}
            </button>
        </div>
    </div>
</div>
