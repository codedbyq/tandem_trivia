# Tandem Trivia 
### [Live Demo](https://www.marquisbentley.com/tandem_trivia)
I created a lightweight and fun application application that displays trivia questions with multiple-choice answers to select from. Check out a live demo [here](https://www.marquisbentley.com/tandem_trivia).

<img src="https://marquis-assets.s3-us-west-1.amazonaws.com/portfolio/Screen+Shot+2020-11-01+at+11.11.03+AM.png" alt="tandem trivia" width="450"/>

## Getting started
Tandem Trivia is hosted using github pages so you can play the game in browser without downloading the files, just follow the link above. If you would like to run locally that can be done very easily as well! The game is built with vanilla Javascript so just follow these steps:
1. Download the repo and unzip
2. Open up your terminal and CD into the folder
3. Run ```npm install``` to install the dependencies
4. Run ```npm start``` to run the webpack bundler
5. Open the index.html file in Google Chrome and start playing!


## Technologies
- Javascript (ES6)
- Webpack
- HTML
- CSS

## Gameplay
- Each round a random trivia question will appear with 4 potential answers a user must choose from
- The user has 10 seconds to select an answer
- Once a choice is made, the user will receive feedback at the bottom if they are correct and the correct answer will be shown in green

<img src="https://marquis-assets.s3-us-west-1.amazonaws.com/portfolio/trivia-gif.gif" alt="trivia gif" width="450"/>

- Scoring: 
  - Running out of time or incorrect answers will result in zero points for the round
  - For correct answers, scoring is based on the time remaining. (Time remaining * 10) * Multiplier
  
  ``` javascript
  updateGame() {
        const answer = this.currentQuestion.correct;
        const guess = this.userGuess.firstChild.innerText;
        const last = this.lastQuestion();

        if (answer === guess) {
            const roundScore = (this.timer.time * 10) * this.multiplier;
            this.score += roundScore;
        }

        this.renderStats();
        this.renderCorrectChoice();
        last ? this.renderFinalScore() : this.nextQuestionPrompt();
    }
   ```
- The game is over when all 10 questions have been answered (time running out counts as an answer)
  - A final score will be displayed with an option to play again
  
<img src="https://marquis-assets.s3-us-west-1.amazonaws.com/portfolio/gameover-trivia.png" alt="trivia gif" width="450"/>

## Future Updates
- [ ] High Score! What's a game without a leaderboard
- [ ] Improve UX (ex. sound effects, music, images, etc)
- [ ] Mobile UI Optimization - fix some spacing issues
- [ ] Use React libraries to add animations (ex. updating the score)
