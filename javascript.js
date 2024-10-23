let prompt = window.prompt("Please choose rock, paper or scissors:").toLowerCase();
let userChoice = "";
function getUserChoice(){
    if(prompt == "rock" || prompt == "paper" || prompt == "scissors"){
        return userChoice = prompt;
    } else {
        return "to do shit, start again !!!";
    }
}
console.log(`You have chosen ${getUserChoice()}`);

let mathRandom = Math.random();
let computerChoice = "";
function getComputerChoice(){
    if (mathRandom > 0 && mathRandom <= 0.333){
        return computerChoice = "rock";
    }else if (mathRandom >0.333 && mathRandom < 0.666){
        return computerChoice = "paper";
    }else if(mathRandom> 0.666 && mathRandom < 1){
        return computerChoice = "scissors";
    }else {
        return "Issue";
    }
}
console.log(`The computer has chosen ${getComputerChoice()}.`);

function playGame(){
    let userScore = 0;
    let computerScore = 0;
    let winner = "";
    function playRound(userChoice, computerChoice){
        if (userChoice == computerChoice){
            return "Draw, play again";
        }else if (userChoice == "rock"){
            if(computerChoice == "paper"){
                computerScore ++;
                winner = "computer";
            }else {
                userScore ++;
                winner = "user";
            }
        }else if (userChoice == "paper"){
            if (computerChoice == "scissors"){
                computerScore ++;
                winner = "computer";
            }else {
                userScore ++;
                winner = "user";
            }
        }else if (userChoice == "scissors"){
            if (computerChoice == "rock"){
                computerScore ++;
                winner = "computer";
            }else {
                userScore ++;
                winner = "user";
            }
        }else {
            return "issue";
        }
    }
const userSelection = getUserChoice();
const computerSelection = getComputerChoice();
console.log(playRound(userSelection, computerSelection));
console.log(`Your socre is : ${userScore}, the computer score is: ${computerScore}. The winner is ${winner} !!!`);
}
