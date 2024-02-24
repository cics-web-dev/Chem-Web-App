<script>
    import QuestionBody from './QuestionBody.svelte';
    import QuestionOptions from './QuestionOptions.svelte';
    let question = {
        id : 1,
        chapter : 1,
        number : 1,
        title : "Molecular Structure",
        question : "How many hydrogen atoms are present in one molecule of water?",
        options : ["1", "2", "3", "4"],
        correct : [1, 2],
        feedback : "The molecular name for water is Dihydrogen Monoxide"
    }; //dummy data, will implement functionality that fetches from backend later

    let answer = null;
    let show_feedback = false;

    function check_answer(event) {
        return answer === question.correct ? console.log("right") : show_feedback = true;
    }    
</script>

<QuestionBody question={question}/>
<QuestionOptions question={question}/>
