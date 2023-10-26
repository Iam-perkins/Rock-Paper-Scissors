const computerChoice = document.getElementById("computerChoice");
const userChoice = document.getElementById("userChoice");
let result= document.getElementById("result");
const buttonDisplay = document.querySelectorAll("button");
let storage;
let computerStorage;
let resultDisplay;
       buttonDisplay.forEach(buttonDisplay =>buttonDisplay.addEventListener("click",(e)=>{
        storage=e.target.id;
        userChoice.innerHTML=storage;
        generateComputerChoice();
        generateResult();
       }))

       function generateComputerChoice(){
      
        var randomFigure = Math.floor(Math.random()*3)+1 ;
        //console.log(randomFigure)
        if (randomFigure=== 1){
            computerStorage= "rock"
        }
         if(randomFigure=== 2){
            computerStorage= "scissors"
        }
        if (randomFigure=== 3){
            computerStorage= "paper"
        }
        computerChoice.innerHTML=computerStorage
       }
       function generateResult(){
           if (computerChoice=== userChoice){
                   resultDisplay="its a draw!"
           }
            if(computerChoice==="rock" && userChoice==="paper"){
            resultDisplay="congratulations, you won"
           }
            if(computerChoice==="rock" && userChoice==="scissors"){
            resultDisplay="you lose , try again"
           }
         if(computerChoice==="paper" && userChoice==="rock"){
            resultDisplay="you lose , try again"
           }
           if(computerChoice==="paper" && userChoice==="scissors"){
            resultDisplay=" congratulations,you won"
           }
           if(computerChoice==="scissors" && userChoice==="rock"){
            resultDisplay="congratulations, you won "
           }
           if(computerChoice==="scissors" && userChoice==="paper"){
            resultDisplay="you lose, try again"
           }
           result.innerHTML=resultDisplay
           console.log(resultDisplay)
       }