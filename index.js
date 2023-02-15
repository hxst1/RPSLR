const tableGame = document.querySelector(".table");
const roundsGame = document.querySelector(".rounds");
const results = document.querySelector(".results");
const cpuGame = document.querySelector(".cpu");

const skills = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

let rounds = 1;
let win = 0;
let tie = 0;
let lose = 0;

const determineWinner = (player1, player2) => {
  if (player1 === player2) {
    tie++;
  } else if (
    (player1 === "Rock" && (player2 === "Scissors" || player2 === "Lizard")) ||
    (player1 === "Paper" && (player2 === "Rock" || player2 === "Spock")) ||
    (player1 === "Scissors" && (player2 === "Paper" || player2 === "Lizard")) ||
    (player1 === "Lizard" && (player2 === "Paper" || player2 === "Spock")) ||
    (player1 === "Spock" && (player2 === "Rock" || player2 === "Scissors"))
  ) {
    win++;
  } else {
    lose++;
  }
};

const resultsView = (cpu) => {
  roundsGame.textContent = `rounds: ${rounds++}`;
  cpuGame.textContent = `cpu: ${skills[cpu]}`;
  results.textContent = `Win: ${win} / Tie: ${tie} / Lose: ${lose}`;
};

skills.forEach((skill) => {
  let p = document.createElement("p");
  p.textContent = skill;
  p.classList = "skill";
  tableGame.appendChild(p);

  p.addEventListener("click", (e) => {
    let user = e.target.innerText;
    let cpu = Math.floor(Math.random() * 5);

    determineWinner(user, skills[cpu]);
    resultsView(cpu);
  });
});
