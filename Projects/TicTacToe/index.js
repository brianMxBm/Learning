/*

Requirements. 
-Alterate the symbols created when pressing a cell. 
-Check for win conditions or tie condition
- Show Winning Message or Tie Message
*/

const cellElements = document.querySelectorAll("[data-cell]");

const elem = document.querySelector("[data-cell]");

console.log(elem, "here");

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const boardElement = document.getElementById("board");
const winningMessageElement = document.getElementById("winning-message");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);

const X_CLASS = "x";
const O_CLASS = "o";

let circleTurn;

function startGame() {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHover();
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? O_CLASS : X_CLASS;
  placeMark(cell, currentClass);

  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    switchTurns();
    setBoardHover();
  }
}

function setBoardHover() {
  boardElement.classList.remove(X_CLASS);
  boardElement.classList.remove(O_CLASS);

  if (circleTurn) {
    boardElement.classList.add(O_CLASS);
  } else {
    boardElement.classList.add(X_CLASS);
  }
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function switchTurns() {
  circleTurn = !circleTurn;
}

function isDraw() {
  return [...cellElements].every((cell) => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
  });
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = "Draw!";
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
  }
  winningMessageElement.classList.add("show");
}

startGame();
