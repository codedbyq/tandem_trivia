import questionList from '../Apprentice_TandemFor400_Data.json';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {

    // ! Testing 
    window.game = new Game(questionList);
    window.questionList = questionList;
})