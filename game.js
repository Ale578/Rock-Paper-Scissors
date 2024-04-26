let human_score, computer_score = 0;

function playGame () {
    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        // Play round

            // Get the human's choice
        let human_selection = getHumanChoice();
        console.log(human_selection);

            // Get computer's choice
        let computer_selection = getComputerChoice();
        console.log(computer_selection);
    

            // Compare human's choice with computer's choice, declare outcome
            // and modify scores
        playRound(human_selection, computer_selection);
    }
    // Declare match winner
    if (human_score == computer_score) {
        console.log("The game was a tie")
    }
    else if (human_score > computer_score) {
        console.log("You won the match!")
    }
    else {
        console.log("You lost the match...")
    }
}


function getHumanChoice () {
    // Prompt user until user inputs rock, paper or scissors
    let user_input;
    do {
        user_input = prompt("Input rock, paper or scissors:").toLowerCase();
    } while ((user_input != "rock") && (user_input != "paper") && (user_input != "scissors"));  
    
    return user_input
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
        console.log("tie!");
    }
    else if (
    ((humanChoice == "rock") && (computerChoice == "scissors"))
    || ((humanChoice == "paper") && (computerChoice == "rock"))
    || ((humanChoice == "scissors") && (computerChoice == "paper"))) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        human_score += 1;
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computer_score += 1;
    }
}

playGame();