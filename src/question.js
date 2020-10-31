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

    // Grab the 4 choice divs and attach a random choice for the user to choose from
    renderChoices() {
        const divs = document.querySelectorAll('.choice');
        const choices = this.shuffleChoices();

        for (let i = 0; i < divs.length; i++) {
            const div = divs[i];
            const choice = document.createElement('p');
            choice.innerText = choices[i];
            div.appendChild(choice);
        }
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

    // call this function to render the question and choices together
    render() {
        this.renderQuestion();
        this.renderChoices();
    }

    // Find the h1 tag with the id question and replace the current question 
    // with default text
    clearQuestion() {
        document.getElementById('question').innerText = 'Are you ready?'
    }

    // Find all the choices divs and replace the current choice with an 
    // empty string
    clearChoices() {
        const choices = document.querySelectorAll('.choice');
        for (let i = 0; i < choices.length; i++) {
            const choice = choices[i];
            choice.innerHTML = '';
        }
    }

    // call this function to remove the question and choices together from the game
    clear() {
        this.clearQuestion();
        this.clearChoices();
    }
    
}

export default Question;