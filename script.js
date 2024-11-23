let userScore = 0;
let computerScore = 0;
const choices = ["piedra", "papel", "tijera"];

function login() {
    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;

    if (usuario === "master" && clave === "1234") {
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.game-container').style.display = 'block';
    } else {
        alert("Usuario o clave incorrectos.");
    }
}

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = determineWinner(userChoice, computerChoice);

    const computerImage = `<img src="${computerChoice.toUpperCase()}.png" alt="${computerChoice}" width="100" height="100" class="move">`;

    if (result === "empate") {
        document.getElementById("result").innerHTML = `Empate! La computadora eligió ${computerImage}.`;
    } else if (result === "usuario") {
        document.getElementById("result").innerHTML = `¡Ganaste! La computadora eligió ${computerImage}.`;
        userScore++;
    } else {
        document.getElementById("result").innerHTML = `¡Gana la computadora! La computadora eligió ${computerImage}.`;
        computerScore++;
    }

    document.getElementById("userScore").textContent = userScore;
    document.getElementById("computerScore").textContent = computerScore;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "empate";
    } else if (
        (userChoice === "piedra" && computerChoice === "tijera") ||
        (userChoice === "papel" && computerChoice === "piedra") ||
        (userChoice === "tijera" && computerChoice === "papel")
    ) {
        return "usuario";
    } else {
        return "computadora";
    }
}
