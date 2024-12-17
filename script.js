let userScore = 0;
let compScore = 0;

let userPara = document.querySelector("#user-score");
let comPara = document.querySelector("#comp-score")

let games = document.querySelectorAll(".game");
let msg = document.querySelector("#msg");

const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        userScore++;
        userPara.innerText = userScore;
        msg.innerText = `You Win ! 🎉, your ${userChoice} beats ${comChoice}`;
    } else {
        msg.innerText = `You lose 😕, ${comChoice} beats your ${userChoice}`;
        compScore++;
        comPara.innerText = compScore;
    }
};

const playGame = (userChoice) => {
    const comChoice = getComputerChoise();
    console.log(userChoice);
    console.log(comChoice);

    if (userChoice == comChoice) {
        msg.innerText = "Match Draw 😠";
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = comChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = comChoice === "scissors" ? false : true;
        } else {
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }

}

const getComputerChoise = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];

}

games.forEach((game) => {
    game.addEventListener("click", () => {
        const userChoise = game.getAttribute("id");
        playGame(userChoise);

    })
})

