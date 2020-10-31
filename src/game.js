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
        this.nextRound = this.nextRound.bind(this);
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

    setCurrentQuestion() {
        this.currentQuestion = this.questions[this.round];
        this.currentAnswer = this.currentQuestion
    }

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

    removeChoiceListener() {
        const choices = document.querySelectorAll('.choice');
        choices.forEach(choice => choice.removeEventListener('click', this.selectChoice))
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
        this.removeChoiceListener();
    }
    
    // 
    updateGame() {
        const answer = this.currentQuestion.correct;
        const guess = this.userGuess.firstChild.innerText;

        if (answer === guess) {
            const roundScore = (parseInt(this.timer.time) * 10) * this.multiplier;
            this.score += roundScore;
        }

        this.renderStats();
        this.renderCorrectChoice();
        this.nextQuestionPrompt();
    }

    // game is over once all 10 questions have been answered
    gameOver() {
        return this.round >= 10;
    }

    timesUp() {
        const div = document.querySelector('.next_question');
        const timesUp = document.createElement('h1');

        timesUp.innerText = "Time's Up! Next Question";
        div.appendChild(timesUp);
    }

    // change the font color of the correct answer to green and if applicable 
    // change the color of the incorrect guess to red
    renderCorrectChoice() {
        const choices = document.querySelectorAll('.choice');
        let guess = this.userGuess ? this.userGuess.firstChild : null;
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


    nextQuestionPrompt() {
        const div = document.querySelector('.next_question');
        const nextQuestion = document.createElement('h1');

        if (this.userGuess.innerText === this.currentQuestion.correct) {
            nextQuestion.innerText = "That's correct! Next Question";
            nextQuestion.classList.add('correct');

        } else {
            nextQuestion.innerText = 'Incorrect... Next Question';
            nextQuestion.classList.add('incorrect');
        }

        nextQuestion.addEventListener('click', this.nextRound);
        div.appendChild(nextQuestion);
    }

    clearNextQuestionPromt() {
        const div = document.querySelector('.next_question');
        div.innerHTML = '';
    }

    // clear the previous round and start a new one
    nextRound() {
        // housekeeping - clear the board and increase round
        this.currentQuestion.clear();
        this.clearNextQuestionPromt();
        this.userGuess = '';
        this.round += 1;

        // create new instances, render new question and choices, start the timer
        this.timer = new Timer(10, this.updateGame);
        this.currentQuestion = this.questions[this.round];
        this.currentQuestion.render();
        this.addChoiceListener();
        this.timer.start();
    }
}

export default Game;

// define win when index is greater than 10