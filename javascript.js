let userScore = 0;
let computerScore = 0;
for(let rounds = 0; rounds < 5; rounds ++){
    function playGame(){
        let prompt = window.prompt("Please choose rock, paper or scissors:").toLowerCase();
        //let userChoice = "";
        function getUserChoice(){
            if(prompt == "rock" || prompt == "paper" || prompt == "scissors"){
                return userChoice = prompt;
            } else {
                return "to do shit, start again !!!";
            }
        }
        console.log(`You have chosen ${getUserChoice()}`);

        let mathRandom = Math.random();
        //let computerChoice = "";
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
        function playRound(userChoice, computerChoice){
            if (userChoice == computerChoice){
                console.log("Draw, play again");
            }else if (userChoice == "rock"){
                if(computerChoice == "paper"){
                    computerScore += 1;
                }else {
                    userScore += 1;
                }
            }else if (userChoice == "paper"){
                if (computerChoice == "scissors"){
                    computerScore += 1;
                }else {
                    userScore += 1;
                }
            }else if (userChoice == "scissors"){
                if (computerChoice == "rock"){
                    computerScore += 1;
                }else {
                    userScore += 1;
                }
            }else {
                return "issue";
            }
        }
        const userSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(userSelection, computerSelection));
    }
    console.log(playGame());
}
function findWinner(){
    if (userScore > computerScore){
        return `You are the winner with ${userScore} point(s) and ${computerScore} point(s) for the computer!!!`;
    }else{
        return `Computer is the winner with ${computerScore} point(s) and ${userScore} point(s) for you!!!`;
    }
}
console.log(findWinner());