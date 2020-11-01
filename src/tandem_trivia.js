import questionList from '../Apprentice_TandemFor400_Data.json';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
    const game = new Game(questionList);
    const start = document.querySelector('.start');
    const restart = document.querySelector('.restart');
    
    // then the play button is clicked hide the intro div, then render 
    // and start the game
    start.addEventListener('click', () => {
        const intro = document.getElementById('intro');
        const choices = document.getElementById('multiple_choice');

        choices.classList.remove('hidden');
        intro.classList.add('hidden');

        game.play();
    });
    
    // then the play button is clicked hide the intro div, then render 
    // and start the game
    restart.addEventListener('click', () => {
        const gameOver = document.getElementById('game_over');
        const choices = document.getElementById('multiple_choice');

        choices.classList.remove('hidden');
        gameOver.classList.add('hidden');

        game.playAgain();
    });


    // ! Testing 
    window.game = new Game(questionList);
    window.questionList = questionList;
})