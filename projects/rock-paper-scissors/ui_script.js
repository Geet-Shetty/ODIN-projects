function computerPlay() {
    let random_number = Math.round(Math.random() * 2); // generate a random number from 0 to 2
    switch(random_number) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

function compareMoves(opposing_move, lose_against, win_against) {
    if(opposing_move === lose_against) { // could be using enums here or mayb booleans
        return 0; // lose
    } else if(opposing_move == win_against) {
        return 2; // win
    } else {
        return 1; // tie
    }
}

let rock = 'rock', paper = 'paper', scissors = 'scissors' // to avoid mistyping the strings
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let result = -1
    switch(playerSelection) {
        case rock:
            result = compareMoves(computerSelection,paper,scissors)
            break
        case paper:
            result = compareMoves(computerSelection,scissors,rock)
            break
        case scissors:
            result = compareMoves(computerSelection,rock,paper)
            break
    }
    if(result === 0) {
        console.log(`You Lose: ${computerSelection} beats ${playerSelection}`)
    } else if (result === 2) {
        console.log(`You Win: ${playerSelection} beats ${computerSelection}`)
    } else {
        console.log(`You Tied: ${playerSelection} and ${computerSelection} can't do shit against each other`)
    } 
    return result 
}

function playGame(playerSelection) {
    return playRound(playerSelection, computerPlay())
}

function game() {
    let playerWins = 0, computerWins = 0 
    for(let count = 0; count < 6; count++){
        let player_input = prompt("Pick: Rock, Paper or Scissors (any case)") // not checking for mistyped inputs
        let result = playGame(player_input)
        console.log(result)
        if(result === 0) { // lost
            computerWins++;
        } else if (result === 2) { // win
            playerWins++;
        } else { // tie 
            playerWins++;
            computerWins++;
        }   
    }

    if (playerWins > computerWins) {
        console.log(`Player: ${playerWins} vs Computer: ${computerWins} -- Player Wins`)
    } else if (playerWins < computerWins) {
        console.log(`Player: ${playerWins} vs Computer: ${computerWins} -- Computer Wins`)
    } else {
        console.log(`Player: ${playerWins} vs Computer: ${computerWins} -- Tie!`)
    }
}


function button_visability(input_class_list, flag) {
    if(flag){
        input_class_list.remove('clicked');
        input_class_list.add('click')
    } else {
        input_class_list.remove('click');
        input_class_list.add('clicked');
    }
}

const buttons = document.querySelectorAll('input');
let inputs = Array.from(buttons);

inputs.forEach((input) => {
    let cl = input.classList; 
    let flag = cl.contains("clicked"); 
    console.log(cl,flag);
    input.addEventListener('click', function (e) { 
        console.log(e);
        console.log(cl,flag);
        button_visability(cl,flag);
    });
});
