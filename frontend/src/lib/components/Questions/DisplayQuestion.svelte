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
        questionMolFile:
            'Molecule Name\n  CHEMDOOD08070920033D 0   0.00000     0.00000     0\n[Insert Comment Here]\n 14 15  0  0  0  0  0  0  0  0  1 V2000\n   -0.3318    2.0000    0.0000   O 0  0  0  1  0  0  0  0  0  0  0  0\n   -0.3318    1.0000    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -1.1980    0.5000    0.0000   N 0  0  0  1  0  0  0  0  0  0  0  0\n    0.5342    0.5000    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -1.1980   -0.5000    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -2.0640    1.0000    0.0000   C 0  0  0  4  0  0  0  0  0  0  0  0\n    1.4804    0.8047    0.0000   N 0  0  0  1  0  0  0  0  0  0  0  0\n    0.5342   -0.5000    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -2.0640   -1.0000    0.0000   O 0  0  0  1  0  0  0  0  0  0  0  0\n   -0.3318   -1.0000    0.0000   N 0  0  0  1  0  0  0  0  0  0  0  0\n    2.0640   -0.0000    0.0000   C 0  0  0  2  0  0  0  0  0  0  0  0\n    1.7910    1.7553    0.0000   C 0  0  0  4  0  0  0  0  0  0  0  0\n    1.4804   -0.8047    0.0000   N 0  0  0  1  0  0  0  0  0  0  0  0\n   -0.3318   -2.0000    0.0000   C 0  0  0  4  0  0  0  0  0  0  0  0\n  1  2  2  0  0  0  0\n  3  2  1  0  0  0  0\n  4  2  1  0  0  0  0\n  3  5  1  0  0  0  0\n  3  6  1  0  0  0  0\n  7  4  1  0  0  0  0\n  4  8  2  0  0  0  0\n  9  5  2  0  0  0  0\n 10  5  1  0  0  0  0\n 10  8  1  0  0  0  0\n  7 11  1  0  0  0  0\n  7 12  1  0  0  0  0\n 13  8  1  0  0  0  0\n 13 11  2  0  0  0  0\n 10 14  1  0  0  0  0\nM  END\n> <DATE>\n07-08-2009\n',
        difficulty: 'Easy'
    }; //dummy data, will implement functionality that fetches from backend later
</script>

<QuestionHeader
    chapter={question.chapter}
    question={question.question}
    title={question.title}
    description={question.description}
    difficulty={question.difficulty}
/>
<QuestionAnimation questionMolFile={question.questionMolFile} />
<QuestionOptions {question} />
