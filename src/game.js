import Question from './question';
import Timer from './timer';

class Game {
    constructor(questionList) {
        // initialize questions and create a random set of 10
        this.questionList = questionList;
        this.questions = [];
        this.generateQuestions();
        
        // set game variables
        this.timer = new Timer(10, this.timesUp(this));
        this.round = 0;
        this.score = 0;
        this.multiplier = 1;
        this.currentQuestion = this.questions[this.round];
        this.userGuess = '';

        // bind functions
        this.updateGame = this.updateGame.bind(this);
        this.selectChoice = this.selectChoice.bind(this);
        this.nextRound = this.nextRound.bind(this);
        this.timesUp = this.timesUp.bind(this);
    }
    
    // generate 10 instances of the Question class with a random question for each
    generateQuestions() {
        const questions = []
        const randoms = this.randomQuestions();
        for (let i = 0; i < randoms.length; i++) {
            const question = new Question(randoms[i]);
            questions.push(question);
        }

        this.questions = questions;
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

    // update the instance variable currentQuestion to match the current round
    setCurrentQuestion() {
        this.currentQuestion = this.questions[this.round];
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

    // remove the event listeners after user clicks one so they can't keep 
    // selecting options
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

    // register the user's selection to answer the question
    selectChoice(e) {
        e.preventDefault();
        this.userGuess = e.currentTarget;
        this.timer.stop();
        this.updateGame();
        this.removeChoiceListener();
    }
    
    // each round check if the user's guess is correct and if the game is over
    updateGame() {
        const answer = this.currentQuestion.correct;
        const guess = this.userGuess.firstChild.innerText;
        const last = this.lastQuestion();

        // update the score if the user is correct
        if (answer === guess) {
            const roundScore = (this.timer.time * 10) * this.multiplier;
            this.score += roundScore;
        }

        // update the scores and render the correct answer
        this.renderStats();
        this.renderCorrectChoice();

        // check if the game is over. If it is end the game, if not prompt user
        // for the next question
        last ? this.renderFinalScore() : this.nextQuestionPrompt();
    }

    // return a boolean representing whether or not the current round is the 
    // 10th and final question
    lastQuestion() {
        return (this.round + 1) >= 10;
    }

    // take in the game object to keep context of this, whenever the user runs 
    // out of time to answer a question call this function
    timesUp(game) {
        return () => {
            game.removeChoiceListener();
            const div = document.querySelector('.next_question');
            const timesUp = document.createElement('h1');
            
            timesUp.innerText = "Time's Up! Next Question";
            timesUp.classList.add('incorrect');
            timesUp.addEventListener('click', game.nextRound);
            div.appendChild(timesUp);
        }
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
    }

    // give the user feedback on their answer to the question and add a button 
    // to start the next round
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

    // clear the next question prompt and user guess feedback for the next round
    clearNextQuestionPromt() {
        const div = document.querySelector('.next_question');
        div.innerHTML = '';
    }

    // clear the previous round and start a new one
    nextRound() {
        // housekeeping - clear the board and increase round
        this.timer.remove();
        this.currentQuestion.clear();
        this.clearNextQuestionPromt();
        this.userGuess = '';
        this.round += 1;

        // increase muliplier on round divisible by 3 
        if (this.round > 0 && this.round % 3 === 0) {
            this.multiplier++;
        }
        
        // create new instances, render new question and choices, start the timer
        this.renderStats();
        this.timer = new Timer(10, this.timesUp(this));
        this.currentQuestion = this.questions[this.round];
        this.currentQuestion.render();
        this.addChoiceListener();
        this.timer.start();
    }

    // hide the multiple choice boxes and render the final score with a button
    // to play again
    renderFinalScore() {
        const choices = document.getElementById('multiple_choice');
        const question = document.getElementById('question');
        const gameOver = document.getElementById('game_over');
        const score = document.querySelector('.bold_score');

        choices.classList.add('hidden');
        gameOver.classList.remove('hidden');

        question.innerText = 'Game Over';
        score.innerText = this.score;
    }

    // generate new questions and reset instance variables
    reset() {
        this.generateQuestions();
        this.timer = new Timer(10, this.timesUp(this));
        this.round = 0;
        this.score = 0;
        this.multiplier = 1;
        this.currentQuestion = this.questions[this.round];
        this.userGuess = '';

        // housekeeping - clear the board 
        this.timer.remove();
        this.currentQuestion.clear();
        this.clearNextQuestionPromt();
    }

    // reset the game and render the first question
    playAgain() {
        this.reset();
        this.play();
    }
}

export default Game;