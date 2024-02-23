<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<script>
    let question = {
        id : 1,
        chapter : 1,
        number : 1,
        title : "Molecular Structure",
        question : "How many hydrogen atoms are present in one molecule of water?",
        options : ["1", "2", "3", "4"],
        correct : [1, 2],
        feedback : "The molecular name for water is Dihydrogen Monoxide"
    }

    let answer = null;
    let show_feedback = false;

    function check_answer(event) {
        return answer === question.correct ? console.log("right") : show_feedback = true;
    }    
</script>

<h1>
    {question.chapter}.{question.number} : {question.title}
</h1>
<p>
    {question.question}
</p>

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