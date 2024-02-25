<script>
    import _ from 'lodash';
    export let question;
    let answer = [];
    let show_feedback = false;

    function check_answer(event) {
        console.log(answer);
        return _.isEmpty(_.xor(question.correct, answer)) ? console.log("right") : show_feedback = true;
    }  
</script>
 <!-- We can add different types of question options 
    (like matching questions or fill in the blank) here in the future -->
<form on:submit={check_answer}>
    
    {#each question.options as option, i}
        {#if question.correct.length > 1}
            <input type="checkbox" id={i} bind:group={answer} value={i}>
        {:else}
            <input type="radio" id={i} bind:group={answer} value={i}>
        {/if}
        <label for={i}>{option}</label>
        <br>
    {/each}
    <button type="submit">Submit</button>
</form>

{#if show_feedback}
    <p>{question.feedback}</p>
{:else}
    <p style="display:none">{question.feedback}</p>
{/if}
