const btRock = document.getElementById("btRock");
const btPaper = document.getElementById("btPaper");
const btScissors = document.getElementById("btScissors");
const result = document.getElementById("result");
const userScore = document.getElementById("userScore");
const computerScore = document.getElementById("computerScore");
const drawScore = document.getElementById("drawScore");

let uScore = 0;
let cScore = 0;
let dScore = 0;

userScore.textContent = uScore;
computerScore.textContent = cScore;
drawScore.textContent = dScore;

function compChoice() {
    const choices = ["pedra", "papel", "tesoura"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playGame(userChoice, computerChoice) {
    result.classList.remove("win", "lose", "draw");
    if (userChoice === computerChoice) {
        dScore++;
        drawScore.textContent = dScore;
        result.classList.add("draw");
        return "Empate! Ambos escolheram " + userChoice;
    }
    const win = (userChoice === "pedra" && computerChoice === "tesoura") ||
                (userChoice === "papel" && computerChoice === "pedra") ||
                (userChoice === "tesoura" && computerChoice === "papel");
    if (win) {
        uScore++;
        userScore.textContent = uScore;
        result.classList.add("win");
        return "Você venceu! " + userChoice + " ganha de " + computerChoice;
    } else {
        cScore++;
        computerScore.textContent = cScore;
        result.classList.add("lose");
        return "Você perdeu! " + computerChoice + " ganha de " + userChoice;
    }
}

btRock.addEventListener("click", () => {
    const computerChoice = compChoice();
    result.textContent = playGame("pedra", computerChoice);
})

btPaper.addEventListener("click", () => {
    const computerChoice = compChoice();
    result.textContent = playGame("papel", computerChoice);
})

btScissors.addEventListener("click", () => {
    const computerChoice = compChoice();
    result.textContent = playGame("tesoura", computerChoice);
})
