<script lang="ts">
    import DisplayOption from './DisplayOption.svelte';
    import BackArrowIcon from '$icons/Question/BackArrow.svelte';
    import NextArrowIcon from '$icons/Question/NextArrow.svelte';

    import type { MultipleChoice } from '$lib/types/question';
    import { selectedStore } from '$stores/OptionsSelectStore.js';

    import '$styles/Button.pcss';

    import _ from 'lodash';

    // Props
    export let question: MultipleChoice; // TODO: Change MultipleChoice to AnyQuestion type in the future

    // Internal State
    let selected_answer: number[] = [];
    let show_feedback: boolean = false;
    let correct: number[] = [];
    let incorrect: number[] = [];

    // this function gets the selected items from the store
    selectedStore.subscribe((_store) => {
        selected_answer = _store;
    });

    // this function handles a submit
    function check_answer() {
        console.log(selected_answer);
        return _.isEmpty(_.xor(question.correctAnswers, selected_answer))
            ? (correct = selected_answer)
            : ((show_feedback = true), (incorrect = selected_answer));
    }
</script>

<!-- We can add different types of question options 
    (like matching questions or fill in the blank) here in the future -->
<div class="mx-auto max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8">
    <div class="grid justify-stretch gap-3 md:grid-cols-2 md:items-center md:justify-between">
        <form on:submit|preventDefault={check_answer}>
            {#each question.options as option, index}
                <!-- this div is displayed if the form has been submitted and the answer is correct -->
                {#if correct.includes(index)}
                    <DisplayOption
                        {option}
                        {index}
                        correct={question.correctAnswers}
                        checked={false}
                        className="my-3 rounded-lg bg-green-200 p-3 cursor-pointer"
                    />

                    <!-- this div is displayed if the form has been submitted and the answer is incorrect -->
                {:else if incorrect.includes(index)}
                    <DisplayOption
                        {option}
                        {index}
                        correct={question.correctAnswers}
                        checked={false}
                        className="my-3 rounded-lg bg-red-200 p-3 cursor-pointer"
                    />

                    <!-- this div is displayed if the form has not been submitted and the option is selected -->
                {:else if selected_answer.includes(index)}
                    <DisplayOption
                        {option}
                        {index}
                        correct={question.correctAnswers}
                        checked={true}
                        className="my-3 rounded-lg p-3 bg-slate-300 cursor-pointer"
                    />

                    <!-- this div is displayed if the form has not been submitted and the option is not selected yet -->
                {:else}
                    <DisplayOption
                        {option}
                        {index}
                        correct={question.correctAnswers}
                        checked={false}
                        className="my-3 rounded-lg p-3 hover:bg-slate-200 cursor-pointer"
                    />
                {/if}
            {/each}

            <div class="mt-6 flex items-center justify-center md:justify-start">
                <!-- this is the submit button -->
                <button class="submit-button" type="submit">Submit</button>
            </div>

            <div class="mt-12 flex items-center justify-center gap-3">
                <!-- this is the back button -->
                <button class="navigation-button">
                    <BackArrowIcon />
                </button>

                <!-- this is the next button -->
                <button class="navigation-button">
                    <NextArrowIcon />
                </button>
            </div>
        </form>

        <!-- This will display the feedback display -->
        {#if show_feedback}
            <div class="m-3 w-1/2 rounded-lg bg-slate-300 p-3">
                <p>{question.feedback}</p>
            </div>
        {:else}
            <p style="display:none">{question.feedback}</p>
        {/if}
    </div>
</div>
