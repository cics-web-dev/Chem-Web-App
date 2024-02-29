<script lang="ts">
    import type { AnyQuestion } from '$lib/types/question';
    import { onMount } from 'svelte';
    import * as api from '$lib/api';
    import QuestionBody from "./QuestionBody.svelte"
    import QuestionOptions from './QuestionOptions.svelte';

    let question: AnyQuestion;

    question = {
        "id": "123",
        "type": "MCQ",
        "chapter": 10,
        "question": 11,
        "title": "Testing title 123",
        "difficulty": "Easy",
        "description": "Testing description 123",
        "options": [
            "option1",
            "option2",
            "option3",
            "option4"
        ],
        "correctAnswers": [
            0,
            1
        ],
        "feedback": "feedback is important",
        "questionMolFile": "some mol file",
        "feedbackMolFile": "some feedback mol file"
    }

    // commenting out this fetch just use the mock data from above
    // const fetch_and_set_question = async () => {
    //     const data = await api.get('/questions/' + '125');
    //     console.log(data);
    //     // @ts-ignore (will fix type error later)
    //     question = data; 
    // };
    // onMount(async () => {
    //     await fetch_and_set_question();
    // });
    function next_question() {}
</script>

<QuestionBody {question} />
<QuestionOptions {question} />
<!-- <button on:submit={next_question}> Next Question</button> -->
