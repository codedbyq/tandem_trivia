import questionList from '../Apprentice_TandemFor400_Data.json';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
    const game = new Game(questionList);
    const start = document.querySelector('.start');
    
    // then the play button is clicked hide the intro div, then render 
    // and start the game
    start.addEventListener('click', () => {
        const intro = document.getElementById('intro');
        const choices = document.getElementById('multiple_choice');

        choices.classList.remove('hidden');
        intro.classList.add('hidden');

        game.play();
    });


    // ! Testing 
    window.game = new Game(questionList);
    window.questionList = questionList;
})