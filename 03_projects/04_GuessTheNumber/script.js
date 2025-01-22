let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let previousGuesses = [];
let numGuesses = 0;

let playGame = true;

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    } else if(guess < 1 || guess > 100){
        alert("Please enter a number between 1 and 100");
    } else {
        previousGuesses.push(guess);
        if(numGuesses === 11){
            displayGuess(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
        return true;
    }
    return false;
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Congratulations! You guessed the number in ${numGuesses}!`);
        endGame();
    } else if(numGuesses === 10){
        displayMessage(`Game Over! Number was ${randomNumber}`);
        endGame();
    } else {
        displayMessage("Wrong!");
        if(guess < randomNumber){
            lowOrHi.textContent = "Last guess was too low!";
        } else if(guess > randomNumber){
            lowOrHi.textContent = "Last guess was too high!";
        }
    }
}

function displayGuess(guess){
    userInput.value = "";
    guessSlot.innerHTML += guess + " ";
    numGuesses++;
    remaining.textContent = `${10 - numGuesses} guesses remaining`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h1 id="newGame">Start new game</h1>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click", function(){
        randomNumber = parseInt(Math.random() * 100 + 1);
        previousGuesses = [];
        numGuesses = 0;
        guessSlot.innerHTML = "";
        lowOrHi.innerHTML = "";
        remaining.textContent = "10 guesses remaining";
        userInput.removeAttribute("disabled");
        playGame = true;
        startOver.removeChild(p);
    });
}