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

    renderChoices() {
        const choices = document.querySelectorAll('.choice');
        
    }

    // combine the incorrect choices and the correct choice and return with a 
    // shuffled order
    shuffleChoices() {
        const choices = [...this.incorrect, this.correct];

        for (let i = choices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = choices[i];
            choices[i] = choices[j];
            choices[j] = temp;
        }

        return choices;
    }

    // Find the h1 tag with the id question and replace the current question 
    // with default text
    clearQuestion() {
        document.getElementById('question').innerText = 'Are you ready?'
    }
    
}

export default Question;