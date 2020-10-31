import Question from './question';

class Game {
    constructor(questionList) {
        this.questionList = questionList;
        this.questions = [];
        this.generateQuestions();

        this.round = 0;
        this.score = 0;
        this.multiplier = 1;
        this.currentQuestion = this.questions[this.round];
    }

    // generate 10 instances of the Question class with a random question for each
    generateQuestions() {
        const randoms = this.randomQuestions();
        for (let i = 0; i < randoms.length; i++) {
            const question = new Question(randoms[i]);
            this.questions.push(question);
        }
    };

    // return an array of 10 random questions
    randomQuestions() {
        const questions = [];
        while (questions.length < 10) {
            const idx = Math.floor(Math.random() * this.questionList.length)
            const question = this.questionList[idx];
            
            if (!questions.includes(question)) {
                questions.push(question);
            }
        }
        return questions;
    };

    // display the user's score
    renderScore() {
        const score = document.getElementById('score')
        score.innerHTML = `${this.score}`
    }

    // game is over once all 10 questions have been answered
    gameOver() {
        return this.round >= 10;
    }
}

export default Game;

// define win when index is greater than 10