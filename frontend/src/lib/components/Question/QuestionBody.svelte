<script lang="ts">
    import type { AnyQuestion } from '$lib/types/question';
    import { onMount } from 'svelte';

    export let question: AnyQuestion;

</script>

{#if question}
    <h1>
        {question.chapter}.{question.question} : {question.title}
    </h1>
    <p>
        {question.description}
    </p>
{/if}

<!-- We can add the mole animation around here in the future if we need to -->
