const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score"); 
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s"); 


// function for storing random computer choices
function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() *3); //math.floor selects whole numbers
    return choices[randomNumber];
}

// function for storing results!
function win(){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span = computerScore;
}
function lose(){

}

function draw(){
console.log("DRAWED OUT HOE");
}    

// function that stores switch statements 
function game(userChoice){
   const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
        win();
        break;
     case "rp":
     case "ps":
     case "sr":
        lose();
        break;
     case "rr":
     case "ss":
     case "pp":
        draw();
        break;
  }
}

// stores event listeners for buttons!
function main() {
    rock_div.addEventListener('click', function(){
        game("r");
    })

    paper_div.addEventListener('click', function(){
        game("p");
    })

    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();