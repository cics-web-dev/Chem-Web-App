<script>
    export let question;
    let answer = null;
    let show_feedback = false;

    function check_answer(event) {
        return answer === question.correct ? console.log("right") : show_feedback = true;
    }  
</script>
 <!-- We can add different types of question options 
    (like matching questions or fill in the blank) here in the future -->
<form on:submit={check_answer}>
    {#each question.options as option, i}
        <input type="radio" id={i} bind:group={answer} value={i}>
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
