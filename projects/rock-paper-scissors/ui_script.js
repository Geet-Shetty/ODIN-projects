const choices = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
}

const results = {
    UNKNOWN: -1,
    LOSE: 0,
    TIE: 1, 
    WIN: 2, 
}

function computerPlay() {
    let random_number = Math.round(Math.random() * 2); // generate a random number from 0 to 2
    switch(random_number) {
        case 0:
            return choices.ROCK;
        case 1:
            return choices.PAPER; 
        case 2:
            return choices.SCISSORS;
    }
}

function compareMoves(opposing_move, lose_against, win_against) {
    if(opposing_move === lose_against) { 
        return results.LOSE; 
    } else if(opposing_move == win_against) {
        return results.WIN; 
    } else {
        return results.TIE;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result = choices.UNKNOWN;
    switch(playerSelection) {
        case choices.ROCK:
            result = compareMoves(computerSelection,choices.PAPER,choices.SCISSORS);
            break
        case choices.PAPER:
            result = compareMoves(computerSelection,choices.SCISSORS,choices.ROCK);
            break
        case choices.SCISSORS:
            result = compareMoves(computerSelection,choices.ROCK,choices.PAPER);
            break
    }

    let message = "";
    switch(result) {
        case results.LOSE:
            message = `You Lose: ${computerSelection} beats ${playerSelection}`;
            console.log(message);
            break;
        case results.TIE:
            message = `You Tied: ${playerSelection} and ${computerSelection} can't do shit against each other`;
            console.log(message);
            break;
        case results.WIN:
            message = `You Win: ${playerSelection} beats ${computerSelection}`;
            console.log(message);
            break;
    }
    return {result: result, message: message,}; 
}

function playGame(playerSelection) {
    return playRound(playerSelection, computerPlay())
}

var playerWins = 0, computerWins = 0, game_count = 0;
function game(result) {
    game_count++;
    switch(result.result){
        case results.LOSE:
            computerWins++;
            break;
        case results.TIE:
            playerWins++;
            computerWins++;
            break;
        case results.WIN:
            playerWins++;
            break;
    }

    if(game_count === 5) {
        if (playerWins > computerWins) {
            return `Player: ${playerWins} vs Computer: ${computerWins} -- Player Wins`; 
        } else if (playerWins < computerWins) {
            return `Player: ${playerWins} vs Computer: ${computerWins} -- Computer Wins`;
        } else {
            return `Player: ${playerWins} vs Computer: ${computerWins} -- Tie!`;
        }
    } else {
        if (playerWins > computerWins) {
            return `Player: ${playerWins} vs Computer: ${computerWins} -- Player is Winning`; 
        } else if (playerWins < computerWins) {
            return `Player: ${playerWins} vs Computer: ${computerWins} -- Computer is Winning`;
        } else {
            return `Player: ${playerWins} vs Computer: ${computerWins} -- Tie between Player and Computer!`;
        }
    }
}


const buttons = document.querySelectorAll('input');
let inputs = Array.from(buttons);

const computer_result_display = document.querySelector('div[class="computer options"]').querySelector('img'); 
// better than using children[0]

const text_result_display = document.querySelector('div[class="result"]').querySelector('h1');

inputs.forEach((input) => {
    const image = document.querySelector(`img[src="images/${input.dataset.type}.png"]`);
    input.parentElement.addEventListener('mousedown', () => { image.parentElement.setAttribute("class","selected");})
    input.addEventListener('click', function(e) { 
        // console.log(e.target);
        // console.log(e.target.classList);
        image.parentElement.setAttribute("class","unselected");
        if(input.checked){
            let computer_result = computerPlay();
            let game_result = playRound(input.dataset.type, computer_result);
            computer_result_display.src = `images/${computer_result}.png`; 
            let result_info = game(game_result);
            text_result_display.textContent = result_info;
        } 
    });
});

/*
- the way the borders come over the boxes is buggy
- not making use of the single round result even though it is being returned (too much refactoring) 
*/
