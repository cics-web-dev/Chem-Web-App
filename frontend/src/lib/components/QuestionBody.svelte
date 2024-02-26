<script lang="ts">
    import type { MultipleChoice } from '$lib/types/question';

    export let question: MultipleChoice; // TODO: Change MultipleChoice to AnyQuestion type in the future
</script>

<h1>
    {question.chapter}.{question.question} : {question.title}
</h1>
<p>
    {question.description}
</p>
<!-- We can add the mole animation around here in the future if we need to -->
