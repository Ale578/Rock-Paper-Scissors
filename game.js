// Play 5 rounds

    // Play round

        // Get computer's choice
        let computer_selection = getComputerChoice();
        console.log(computer_selection);

        // Get the human's choice
        let human_selection = getHumanChoice();
        console.log(human_selection);

        // Compare human's choice with computer's choice, declare outcome
        // and modify scores


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

function getHumanChoice () {
    // Prompt user until user inputs rock, paper or scissors
    let user_input;
    do {
        user_input = prompt("Input rock, paper or scissors:").toLowerCase();
    } while ((user_input != "rock") && (user_input != "paper") && (user_input != "scissors"));  
    
    return user_input
}