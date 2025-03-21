let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const restart = document.querySelector("#restart");


//GENERETE COMPUTER CHOIICE
const genComChoice = () => {
    const option = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random()*3) //PIC ANY RANDOMLY  OPTION
   return option[randIdx];
};

const drowGame = () => {        //IF BOTH CHOSE SAME IT WILL WORK
    msg.innerText="game drow both chose same";
    msg.style.backgroundColor ="blue";
};


const showWinner = (userWin, userChoice, compChoice) => {    // CALCULATE THE SCORE
     if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText=`you win  your ${userChoice} beat ${compChoice}`
        msg.style.backgroundColor ="green";
     }
    else{
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText=`you loes  ${compChoice} beat your ${userChoice}`
        msg.style.backgroundColor ="red";

    }
};


const playgame = (userChoice)  => {
    // console.log("user choice ", userChoice)
   const compChoice = genComChoice();
   //console.log("camp choice", compChoice)


   if(userChoice === compChoice){
    drowGame();
   }else {
    let userWin = true;     // TRACK USER WIN OR NOT

   if(userChoice === "rock"){
    userWin = compChoice === "scissors" ? true : false;
   }
   else if(userChoice === "papre"){
    userWin = compChoice === "scissors" ? false : true;
   }
   else(userChoice === "scissors")
    userWin = compChoice === "rock" ?  false : true;
   
   showWinner(userWin, userChoice,compChoice);
    }

};

    restart.addEventListener("click", () => {
      userScore = 0;
      compScore = 0;
      userScorePara.innerText= 0;
      compScorePara.innerText = 0;
      
       msg.innerText = "Gestart Game";
    })




choices.forEach((choice) => {
      choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        // console.log("choice was clicked", userChoice)
        playgame(userChoice);
    });
        
     
      
});

