<script lang="ts">
    import type { MultipleChoice } from '$lib/types/question';
    import _ from 'lodash';

    // Props
    export let question: MultipleChoice; // TODO: Change MultipleChoice to AnyQuestion type in the future

    // Internal State
    let selected_answer: number[] = [];
    let show_feedback: boolean = false;

    function check_answer() {
        console.log(selected_answer);
        return _.isEmpty(_.xor(question.correctAnswer, selected_answer))
            ? console.log('right')
            : (show_feedback = true);
    }
</script>

<!-- We can add different types of question options 
    (like matching questions or fill in the blank) here in the future -->

<form on:submit={check_answer}>
    {#each question.options as option, index}
    <div class= "m-3 p-3 rounded-lg w-1/2">
        {#if question.correctAnswer.length > 1}
                <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id={index.toString()}
                    bind:group={selected_answer}
                    value={index}
                />
        {:else}
            <input class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" type="radio" id={index.toString()} bind:group={selected_answer} value={index} />
        {/if}
        <label class="text-sm ms-2" for={index.toString()}>{option}</label>
        <br />
    </div>
    {/each}
    <button class="m-3 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" type="submit">Submit</button>
    <br/>
    <button class="m-3 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
      </svg>
      </button>
    <button class="m-3 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
      </button>
</form>

{#if show_feedback}
    <p>{question.feedback}</p>
{:else}
    <p style="display:none">{question.feedback}</p>
{/if}
