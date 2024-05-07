let human_score = 0;
let computer_score = 0;

let human_score_display = document.querySelector("#humanScore");
let computer_score_display = document.querySelector("#computerScore");

human_score_display.textContent = human_score;
computer_score_display.textContent = computer_score;

let match_results_display = document.querySelector("#matchResults");
let round_result_display = document.querySelector("#roundResult");

function playGame () {
    // Get the human's choice
    let human_selection;
    let options = document.querySelector("#options");

    options.addEventListener("click", (event) => {
        let target = event.target;

        switch(target.id) {
            case "rock":
                human_selection = "rock";
                break;
            case "paper":
                human_selection = "paper";
                break;
            case "scissors":
                human_selection = "scissors";
                break;
        }
            // Get computer's choice
        let computer_selection = getComputerChoice();

            // Compare human's choice with computer's choice, declare outcome
            // and modify scores
        playRound(human_selection, computer_selection);

            // Declare match winner
                // Play to 5 points
        if ((human_score == 5) || (computer_score == 5)) {
            if (human_score == computer_score) {
                match_results_display.textContent = "The game was a tie"
            }
            else if (human_score > computer_score) {
                match_results_display.textContent = "You won the match!";
            }
            else {
                match_results_display.textContent = "You lost the match...";
            }
        }
    });
}

function getComputerChoice() {
    // Return randomly choose rock, paper or scissors 
    let random_value = Math.floor(Math.random() * 2);

    if (random_value == 0) {
        return "rock"
    }
    else if (random_value == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}


function playRound(humanChoice, computerChoice) {
    // Compare human's choice with computer's choice, declare outcome
    // and modify scores
    if (humanChoice == computerChoice) {
        round_result_display.textContent = "tie!";
    }
    else if (
    ((humanChoice == "rock") && (computerChoice == "scissors"))
    || ((humanChoice == "paper") && (computerChoice == "rock"))
    || ((humanChoice == "scissors") && (computerChoice == "paper"))) {
        round_result_display.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        human_score += 1;
    } else {
        round_result_display.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
        computer_score += 1;
    }
    human_score_display.textContent = human_score;
    computer_score_display.textContent = computer_score;

}

playGame();