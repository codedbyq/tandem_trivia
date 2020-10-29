class Question {
    constructor(props) {
        this.question = props.question;
        this.incorrect = props.incorrect;
        this.correct = props.correct;
    }

    renderQuestion() {
        document.getElementById('question').innerText = this.question
    }

    clearQuestion() {
        document.getElementById('question').innerText = 'Are you ready?'
    }
    
}

export default Question;