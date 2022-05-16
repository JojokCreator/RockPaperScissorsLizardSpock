
const selections = ["rock", "paper", "scissors", "lizard", "spock"];

// Task 6 - Track Scores
let computerScore = 0;
let playerScore = 0;
let numberOfGames = 0;
let draw = 0;

let username = prompt("Enter your name (Use a capital)");
var check = /^[\W\d\^a-z]/; //creates a check variable \W:symbols \d:numbers \a-z:small letters=^ 

while (username.length >= 10 || check.test(username)) {
    username = pArompt("The name is invalid, must start with capital letter (not symbol or number)\
    less than 10 characters!!");
}
document.querySelector(".name").innerText = "Hello " + username;

//Listeners for the buttons
document.querySelector("#rock-button").addEventListener("click", function() {
    playGame('rock')
});
document.querySelector("#paper-button").addEventListener("click", function() {
    playGame('paper')
});
document.querySelector("#scissors-button").addEventListener("click", function() {
    playGame('scissors')
});
document.querySelector("#spock-button").addEventListener("click", function() {
    playGame('spock')
});
document.querySelector("#lizard-button").addEventListener("click", function() {
    playGame('lizard')
});


// Function that takes in player move then randomizes a computer move then compares them to return a 1(player win), -1(computer win) or 0(draw).
function getWinner(playerMove) {
    let computerMove = selections[Math.floor(Math.random() * 5)];
    console.log(playerMove, computerMove);
    document.querySelector("#your-move").innerText = "Your Move: " + playerMove;
    document.querySelector("#computer-move").innerText = "Computer Move: " + computerMove;
    if (playerMove === computerMove) {
        return 0;
    } else if ((playerMove === "rock") && (computerMove === "scissors")) {
        return 1;
    } else if ((playerMove === "paper") && (computerMove === "rock")) {
        return 1;
    } else if ((playerMove === "scissors") && (computerMove === "paper")) {
        return 1;
    } else if ((playerMove === "paper") && (computerMove === "scissors")) {
        return -1;
    } else if ((playerMove === "scissors") && (computerMove === "rock")) {
        return -1;
    } else if ((playerMove === "rock") && (computerMove === "paper")) {
        return -1;
        //Lizard Enters
    } else if ((playerMove === "rock") && (computerMove === "lizard")) {
        return 1;
    } else if ((playerMove === "paper") && (computerMove === "lizard")) {
        return -1;
    } else if ((playerMove === "scissors") && (computerMove === "lizard")) {
        return 1;
    } else if ((playerMove === "lizard") && (computerMove === "rock")) {
        return 1;   
    } else if ((playerMove === "lizard") && (computerMove === "paper")) {
        return 1;
    } else if ((playerMove === "lizard") && (computerMove === "scissors")) {
        return -1;
        //spock enters
    } else if ((playerMove === "rock") && (computerMove === "spock")) {
        return -1;
    } else if ((playerMove === "paper") && (computerMove === "spock")) {
        return 1;
    } else if ((playerMove === "scissors") && (computerMove === "spock")) {
        return -1;
    } else if ((playerMove === "lizard") && (computerMove === "spock")) {
        return 1;
    } else if ((playerMove === "spock") && (computerMove === "lizard")) {
        return -1;
    } else if ((playerMove === "spock") && (computerMove === "rock")) {
        return -1;
    } else if ((playerMove === "spock") && (computerMove === "paper")) {
        return -1;
    } else if ((playerMove === "spock") && (computerMove === "scissors"))
        return 1;
}

//function that puts the scores on the bottom
function resultCard(result) {
    numberOfGames++
    document.querySelector("#games-played").innerText = "Games Played: " + numberOfGames
    if (result === 1) {
        playerScore++
        document.querySelector("#wins").innerText = "Wins: " + playerScore
    } else if (result === -1) {
        computerScore++
        document.querySelector("#losses").innerText = "Losses: " + computerScore
    } else
        draw++
    document.querySelector("#drew").innerText = "Drew: " + draw
}

// Run the function
function playGame(playerMove) {
    let result = getWinner(playerMove);
    resultCard(result);
}







