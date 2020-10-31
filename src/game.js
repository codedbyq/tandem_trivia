import Question from './question';
import Timer from './timer';

class Game {
    constructor(questionList) {
        this.questionList = questionList;
        this.questions = [];
        this.generateQuestions();
        
        this.timer = new Timer(10, this.updateGame);
        this.round = 0;
        this.score = 0;
        this.multiplier = 1;
        
        this.currentQuestion = this.questions[this.round];
        this.userGuess = '';

        // bind functions
        this.updateGame = this.updateGame.bind(this);
        this.selectChoice = this.selectChoice.bind(this);
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

    // start the game and render the first question
    play() {
        this.addChoiceListener();
        this.currentQuestion.render();
        this.startTimer();
        this.renderStats();
    };
    
    // add an event listener to each of the choices for a given question, when an 
    // answer is clicked by the user call updateGame to see if it's correct 
    addChoiceListener() {
        const choices = document.querySelectorAll('.choice');
        choices.forEach(choice => choice.addEventListener('click', this.selectChoice))
    }

    // append the timer to the html and start counting down
    startTimer() {
        const timer = document.querySelector('.timer');
        timer.innerHTML = this.timer.time;
        this.timer.start();
    };
    
    // display the game stats
    renderStats() {
        // score
        const score = document.getElementById('score');
        score.innerHTML = `${this.score}`;

        // round
        const round = document.getElementById('round');
        round.innerHTML = `${this.round + 1}/10`;

        // multiplier
        const multiplier = document.getElementById('multiplier');
        multiplier.innerHTML = `${this.multiplier}x`;
    }

    // select choice
    selectChoice(e) {
        e.preventDefault();
        this.userGuess = e.currentTarget;
        this.timer.stop();
        this.updateGame();
    }
    
    // 
    updateGame() {
        const answer = this.currentQuestion.correct;
        const guess = this.userGuess.firstChild.innerText;
        // if (answer === guess) {
        //     console.
        // } else {

        // }
        this.renderCorrectChoice();
    }

    

    // game is over once all 10 questions have been answered
    gameOver() {
        return this.round >= 10;
    }

    // change the font color of the correct answer to green and if applicable 
    // change the color of the incorrect guess to red
    renderCorrectChoice() {
        const choices = document.querySelectorAll('.choice');
        let guess = this.userGuess.firstChild;
        let answer = null;
        
        for (let i = 0; i < choices.length; i++) {
            const choice = choices[i].firstChild;
            if (choice.innerText === this.currentQuestion.correct) {
                answer = choice;
                break;
            }
        }

        if (answer.innerText === guess.innerText) {
            guess.classList.add('correct');
        } else {
            answer.classList.add('correct');
            guess.classList.add('incorrect');
        }
        console.log(answer)
        console.log(guess)
    }
}

export default Game;

// define win when index is greater than 10