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
        {#if question.correctAnswer.length > 1}
            <input
                type="checkbox"
                id={index.toString()}
                bind:group={selected_answer}
                value={index}
            />
        {:else}
            <input type="radio" id={index.toString()} bind:group={selected_answer} value={index} />
        {/if}
        <label for={index.toString()}>{option}</label>
        <br />
    {/each}
    <button type="submit">Submit</button>
</form>

{#if show_feedback}
    <p>{question.feedback}</p>
{:else}
    <p style="display:none">{question.feedback}</p>
{/if}
