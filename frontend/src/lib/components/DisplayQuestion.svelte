<script lang="ts">
    import type { AnyQuestion, MultipleChoice } from '$lib/types/question'; // TODO: Change MultipleChoice to AnyQuestion type in the future
    import {onMount} from 'svelte';
    import QuestionBody from './QuestionBody.svelte';
    import QuestionOptions from './QuestionOptions.svelte';

    let fetch_url : String = `localhost:8080/api/questions/`;
    // let question: MultipleChoice = {
    //     id: '1234',
    //     chapter: 1,
    //     question: 1,
    //     type: 'MCQ',
    //     title: 'Molecular Structure',
    //     description: 'How many hydrogen atoms are present in one molecule of water?',
    //     options: ['Option 1 ABC', 'Option 2 DEF', 'Option 3 GHI', 'Option 4 JKL'],
    //     correctAnswer: [1, 2],
    //     feedback: 'The molecular name for water is Dihydrogen Monoxide',
    //     questionMolFile: ''
    // }; //dummy data, will implement functionality that fetches from backend later

    let question : AnyQuestion;
    const fetch_and_set_question = async () =>{
        const res = await fetch(fetch_url + "123");
        question = await res.json();
    }
    onMount(async () =>{
        fetch_and_set_question();
    })
    function next_question(){

    }

</script>

<QuestionBody {question} />
<QuestionOptions {question} />
<button on:submit={next_question}> Next Question</button>