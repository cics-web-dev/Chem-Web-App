<script lang="ts">
    import type { MultipleChoice } from '$lib/types/question'; // TODO: Change MultipleChoice to AnyQuestion type in the future

    import QuestionHeader from './QuestionHeader.svelte';
    import QuestionAnimation from './QuestionAnimation.svelte';
    import QuestionOptions from './QuestionOptions.svelte';

    let question: MultipleChoice = {
        id: '1234',
        chapter: 1,
        question: 1,
        type: 'MCQ',
        title: 'Molecular Structure',
        description: 'How many hydrogen atoms are present in one molecule of water?',
        options: ['Option 1 ABC', 'Option 2 DEF', 'Option 3 GHI', 'Option 4 JKL'],
        correctAnswers: [1, 2],
        feedback: 'The molecular name for water is Dihydrogen Monoxide',
        questionMolFile: '',
        difficulty: 'Easy'
    }; //dummy data, will implement functionality that fetches from backend later
</script>

<QuestionHeader {question} />
<QuestionAnimation />
<QuestionOptions {question} />
