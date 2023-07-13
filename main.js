let buttons = document.querySelectorAll("img");
const socrePText = document.getElementById("scoreplayer")
const socreCText = document.getElementById("scorecomputer")
const resultEl = document.getElementById("result");
const restartEl = document.getElementById("restart");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = play(button.id, computerChoice());
        console.log(button.id);
        resultEl.textContent = result;
    })
})

const computerChoice = () =>{
    let choices = ["rock", "paper", "scissor"];
    const randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice];
}


const play = (playerSelection, computer) => {
    if (playerSelection === computer){
        return "It's a tie !"
    }
    else if ((playerSelection === "rock" && computer === "scissor") || (playerSelection === "paper" && computer === "rock") ||
        (playerSelection === "scissor" && computer === "paper")
    ) {
        playerScore++;
        socrePText.textContent = playerScore;
        return "You win " + playerSelection + " beat " + computer;
    } else {
        computerScore ++;
        socreCText.textContent = computerScore;
        return "You loose " + computer + " beat " + playerSelection;
    }
}

restartEl.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    socrePText.textContent = playerScore;
    socreCText.textContent = computerScore;
})