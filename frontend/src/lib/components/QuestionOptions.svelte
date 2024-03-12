<script lang="ts">
    import type { MultipleChoice } from '$lib/types/question';
    import DisplayOption from './DisplayOption.svelte';
    import { selected_store } from "./store.js";

    import _ from 'lodash';

    // Props
    export let question: MultipleChoice; // TODO: Change MultipleChoice to AnyQuestion type in the future

    // Internal State
    let selected_answer: number[] = [];
    let show_feedback: boolean = false;
    let correct: number[] = [];
    let incorrect: number[] = [];

    // this function gets the selected items from the store
    selected_store.subscribe((_store) => {
      selected_answer = _store;
    });

    // this function handles a submit
    function check_answer() {
        console.log(selected_answer);
        return _.isEmpty(_.xor(question.correctAnswer, selected_answer))
            ? (correct = selected_answer)
            : (show_feedback = true, incorrect = selected_answer)
    }
</script>

<!-- We can add different types of question options 
    (like matching questions or fill in the blank) here in the future -->

<form on:submit={check_answer}>
    {#each question.options as option, index}

        <!-- this div is displayed if the form has been submitted and the answer is correct -->
        {#if correct.includes(index)} 
            <div class= "bg-green-200 m-3 p-3 rounded-lg w-1/2">
                <DisplayOption option={option} index={index} correct={question.correctAnswer} checked={false}/>
            </div>

        <!-- this div is displayed if the form has been submitted and the answer is incorrect -->
        {:else if incorrect.includes(index)}
            <div class= "bg-red-200	 m-3 p-3 rounded-lg w-1/2"> 
                <DisplayOption option={option} index={index} correct={question.correctAnswer} checked={false}/>
            </div>

        <!-- this div is displayed if the form has not been submitted and the option is selected -->
        {:else if selected_answer.includes(index)}
            <div class= "bg-slate-300 m-3 p-3 rounded-lg w-1/2"> 
                <DisplayOption option={option} index={index} correct={question.correctAnswer} checked={true}/>
            </div>
                    
        <!-- this div is displayed if the form has not been submitted and the option is not selected yet -->
        {:else}
            <div class= "hover:bg-slate-300 m-3 p-3 rounded-lg w-1/2"> 
                <DisplayOption option={option} index={index} correct={question.correctAnswer} checked={false}/>
            </div>
        {/if}
        
    {/each}


    <!-- this is the submit button -->
    <button class="m-3 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" type="submit">Submit</button>
    <br/>

    <!-- this is the back button -->
    <button class="m-3 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
      </svg>
    </button>

    <!-- this is the next button -->
    <button class="m-3 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    </button>
</form>

<!-- This will display the feedback display -->
{#if show_feedback}
    <p>{question.feedback}</p>
{:else}
    <p style="display:none">{question.feedback}</p>
{/if}
