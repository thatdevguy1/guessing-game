// Get score element
let scoreEl = document.querySelector(".score");
// get text (info text) element
let textEl = document.querySelector(".textInfo");
// get start button
let startBtn = document.querySelector("button");
// get parent div for 3 choices
let cupWrapper = document.querySelector(".cupWrapper");

//STATE

const score = {
  win: 0,
  lose: 0,
};

const cups = [0, 0, 0];

let infoText = "press start to play";

//LISTERNERS

startBtn.addEventListener("click", init);

//FUNCTIONS

function init() {
  infoText = "Choose a cup";
  randomizeCup();
  render();
  cupWrapper.classList.add("moveCups");
  cupWrapper.addEventListener("click", cupSelect);
}

function render() {
  textEl.textContent = infoText;
  scoreEl.innerHTML = `<span>Win: ${score.win}</span> || <span>Lose: ${score.lose}</span>`;
}

function randomizeCup() {
  cups.forEach((cup, idx) => {
    cups[idx] = 0;
  });

  let ranNum = Math.floor(Math.random() * 3);

  cups[ranNum] = 1;
}

function cupSelect(evt) {
  let idNum = parseInt(evt.target.id);
  console.log("num chosen = ", idNum);
  console.log("balls in position = ", cups);
  winLogic(cups[idNum]);
  cupWrapper.classList.remove("moveCups");
  cupWrapper.removeEventListener("click", cupSelect);
}

function winLogic(win) {
  console.log("winlogic reached");
  if (win) {
    score.win++;
    infoText = "Nice you won. Press start to play again";
  } else {
    score.lose++;
    infoText = "Sorry better luck next time. Press start to play again";
  }

  render();
}

render();
