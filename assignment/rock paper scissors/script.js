let roundInput = document.getElementById("gameInput");

let playBtn = document.getElementById("playBtn");

let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorBtn = document.getElementById("scissorBtn");

let compChoiceElement = document.getElementById("compChoiceElement");
let userChoiceElement = document.getElementById("userChoiceElement");
let roundResElement = document.getElementById("roundResElement");


let userPointElement = document.getElementById("userPointElement");
let compPointElement = document.getElementById("compPointElement");
let remainingRoundElement = document.getElementById("remainingRoundElement");

playBtn.addEventListener('click', playGame);

rockBtn.addEventListener('click', userChoice)
paperBtn.addEventListener('click', userChoice)
scissorBtn.addEventListener('click', userChoice)

let round = 0;
let userPoint = 0;
let compPoint = 0;
function playGame() {
    // first of all take how many rounds the user want to play
    round = roundInput.value
    console.log(round);
    if (round > 0) {
        // play the game
        document.getElementById("game-container").style.display = "block";
    }
    else {
        alert("Please enter a valid number")
    }
}


function userChoice(e) {
    if (round > 0) {
        console.log("User's choice ", e.target.value);
        let userChoice = e.target.value;
        // generate computer choice from rock paper and scissor
        let choices = ["rock", "paper", "scissor"];
        let compChoice = choices[Math.floor(Math.random() * 3)];
        console.log("comp choice", compChoice);

        // compare th user choice and computer choice for possible outcomes

        // where user is goinng win
        let roundRes = "draw";
        if ((userChoice === "rock " && compChoice === "scissor") || (userChoice === "paper" && compChoice === "rock") || (userChoice === "scissor" && compChoice === "paper")) {
            // console.log("User win");
            roundRes = "win"
            ++userPoint;
            --round;
        }
        else if ((compChoice === "rock " && userChoice === "scissor") || (compChoice === "paper" && userChoice === "rock") || (compChoice === "scissor" && userChoice === "paper")) {
            // console.log("Comp win");
            roundRes = "lose"
            ++compPoint;
            --round;
        }
        else {
            // console.log("Draw");
            roundRes = "draw"
            --round;
        }

        // update the information on the screen
        compChoiceElement.innerHTML = compChoice;
        userChoiceElement.innerHTML = userChoice;
        roundResElement.innerHTML = roundRes;

        userPointElement.innerHTML = userPoint;
        compPointElement.innerHTML = compPoint;
        remainingRoundElement.innerHTML = round;
    }
    // the rounds are over at this point
    else {
        // compare user point and computer point to decide the winner
        if (userPoint > compPoint) {
            alert("User win the game");
        }
        else if (userPoint < compPoint) {
            alert("Computer win the game");
        }
        else {
            alert("Draw");
        }
    }
}
