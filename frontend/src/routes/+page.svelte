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

<div class="flex">
  <input type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox">
  <label for="hs-default-checkbox" class="text-sm text-gray-500 ms-3 dark:text-gray-400">Default checkbox</label>
</div>

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