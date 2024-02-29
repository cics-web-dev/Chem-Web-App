<script lang="ts">
    import type { AnyQuestion } from '$lib/types/question';
    import { onMount } from 'svelte';
    import * as api from '$lib/api';
    import QuestionBody from "./QuestionBody.svelte"
    import QuestionOptions from './QuestionOptions.svelte';

    let question: AnyQuestion;

    const fetch_and_set_question = async () => {
        const data = await api.get('/questions/' + '125');
        console.log(data);
        // @ts-ignore (will fix type error later)
        question = data; 
    };
    onMount(async () => {
        await fetch_and_set_question();
    });
    function next_question() {}
</script>

<QuestionBody {question} />
<QuestionOptions {question} />
<!-- <button on:submit={next_question}> Next Question</button> -->
