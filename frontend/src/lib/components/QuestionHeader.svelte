<script lang="ts">
    import type { MultipleChoice } from '$lib/types/question';

    import RedoIcon from '$icons/Redo.svelte';

    import '$styles/Button.pcss';

    export let question: MultipleChoice; // TODO: Change MultipleChoice to AnyQuestion type in the future
</script>

<div class="mx-auto max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8">
    <div class="grid justify-center gap-3 md:grid-cols-2 md:items-center md:justify-between">
        <div class="text-center md:text-start">
            <h1 class="text-ls uppercase tracking-wider text-black">
                {question.chapter}.{question.question} : {question.title}
            </h1>
            <h2 class="mt-2 font-medium text-black">
                {question.description}
            </h2>
        </div>

        <div class="mt-3 text-center md:flex md:items-center md:justify-end md:text-start">
            <button type="button" class="question-header-button-style">
                <RedoIcon />
                Redo
            </button>
        </div>
    </div>
</div>
