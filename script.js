let userScore = 0;
let compScore = 0;

let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");


const msg = document.querySelector("#msg");

const cho = document.querySelectorAll(".choices");

const generateChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randInx = Math.floor(Math.random() * 3);
    return options[randInx];
}

const drawGame = () =>{
    console.log("Game Draw");
    msg.innerText = "Draw"
    msg.style.backgroundColor = "black"
}

const showWinner = (userWin) => {
    if(userWin == true)
    {
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You Win");
        msg.innerText = "Win";
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScorepara.innerText = compScore;
        console.log("You Lose");
        msg.innerText = "Lose";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) =>{
    console.log("user choice = ",userchoice)
    //Generate computer choice
    const compChoice = generateChoice();
    console.log("Comp Choice = ",compChoice);
    if(userchoice === compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userchoice === "rock")
        {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userchoice === "paper")
        {
            userWin = compChoice === "scissors" ? false : true;
        }
        else if(userchoice === "scissors")
        {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

cho.forEach((choices)=>{
    choices.addEventListener("click", ()=>{
        const userchoice = choices.getAttribute("id");
        // console.log("Clicked the choice",userchoice);
        playGame(userchoice);
    });
});