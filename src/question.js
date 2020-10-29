class Question {
    constructor(props) {
        this.question = props.question;
        this.incorrect = props.incorrect;
        this.correct = props.correct;
    }

    // Find the h1 tag with the id question and update the text to the current question
    renderQuestion() {
        document.getElementById('question').innerText = this.question
    }

    // Find the h1 tag with the id question and replace the current question 
    // with default text
    clearQuestion() {
        document.getElementById('question').innerText = 'Are you ready?'
    }
    
}

export default Question;