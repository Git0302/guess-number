'use strict';

let score = 20;
let highScore = 0;
let randomNum = Math.trunc(Math.random()*20)+1;


function displayMessage(message)
{
    document.querySelector('.message').textContent = message;
}

document.querySelector(".check").addEventListener('click', fun);
function fun()
{ 
    const guess = Number(document.querySelector(".guess").value)

    // When there is no input
    if(!guess)
        {
            displayMessage("❌No number!");
        }

    // When player wins
   else if (guess === randomNum) 
        {
                
            displayMessage('🎉 Correct Number!');
            document.querySelector('.number').textContent = randomNum;

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            if (score > highScore) 
                {
                    highScore = score;
                    document.querySelector('.highscore').textContent = highScore;
                }
        }

    // When guess is wrong
   else if (guess !== randomNum)
        {
            if (score > 1) 
                {
                    displayMessage(guess > randomNum ? '📈 Too high!' : '📉 Too low!');
                    score--;
                    document.querySelector('.score').textContent = score;
                } 
        }
    else
        {
                displayMessage('💥 You lost the game!');
                document.querySelector('.score').textContent = 0;
        }
}

// reset(again btn)

document.querySelector('.again').addEventListener('click', reset)
function reset()
{
    score = 20;
    randomNum = Math.trunc(Math.random()*20)+1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';

};


