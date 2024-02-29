<script>
    import DisplayQuestion from '$components/Question/DisplayQuestion.svelte';

    let question = {
        chapter: 1,
        number: 1,
        title: 'Atomic Structure',
        question: 'What is the atomic number of hydrogen?',
        options: ['1', '2', '3', '4'],
        feedback: 'The atomic number of hydrogen is 1.'
      };

    let answer = '';
</script>

<DisplayQuestion {question} {answer} />

<!-- <h1>
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
{/if} -->