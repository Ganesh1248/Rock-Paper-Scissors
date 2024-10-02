let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genCompChoice = () => {
    const options = ["rock" ,"paper","scissors"];
    const randInx = Math.floor(Math.random() * 3);
    return options[randInx];
}

const drawGame = () => {
    msg.innerText = "Game was draw! play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userchoice,compchoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice} `;
        msg.style.backgroundColor = "green";

    }else {
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText = `You lose. ${compchoice} beats your ${userchoice} `;
        msg.style.backgroundColor = "red";
    }

};

const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);

    //Ganerate computer choice

    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userchoice ===  compChoice) {
        //Draw Game
        drawGame();
    }else {
        let userWin = true;
        if(userchoice === "rock"){
            //scissors,paper
            compChoice === "paper" ? false : true;
        }else if(userchoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;

        }else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userchoice,compChoice);

    }

}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        //console.log("choice was clicked" , userchoice);
        playGame(userchoice);

    });
});

