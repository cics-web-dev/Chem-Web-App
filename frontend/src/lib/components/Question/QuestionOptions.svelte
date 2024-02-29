<script lang="ts">
    import type { AnyQuestion, MultipleChoice } from '$lib/types/question';
    import _ from 'lodash';

    // Properties
    export let question: AnyQuestion; // TODO: Change MultipleChoice to AnyQuestion type in the future

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
{#if question}
    {#if question.type === 'MCQ'}
        <!-- this requires separation of concerns -->
        <form on:submit={check_answer} class="grid space-y-2">
            {#each question.options as option, index}
                <label
                    for={index.toString()}
                    class="max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                >
                    {#if question.correctAnswers.length > 1}
                        <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            id={index.toString()}
                            bind:group={selected_answer}
                            value={index}
                        />
                    {:else}
                        <input
                            type="radio"
                            class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            id={index.toString()}
                            bind:group={selected_answer}
                            value={index}
                        />
                    {/if}
                    <span class="text-sm text-gray-500 ms-3 dark:text-gray-400">{option}</span>
                    <!-- <label for={index.toString()}>{option}</label> -->
                </label>
                <br />
            {/each}
            <button type="submit">Submit</button>
        </form>
    {:else}
        <p>Question type not supported yet</p>
    {/if}
    <!-- Implement other question options here later, preferably in different components -->

    {#if show_feedback}
        <p>{question.feedback}</p>
    {:else}
        <p style="display:none">{question.feedback}</p>
    {/if}
{/if}
