let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector("#newBtn");
let msg = document.querySelector("#msg");

let turnX = true;
let count = 0;
let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      turnX = false;
      box.innerText = "X";
      box.classList.add("x");
      box.classList.remove("o");
    } else {
      turnX = true;
      box.innerText = "O";
      box.classList.add("o");
      box.classList.remove("x");
    }
    count++;
    box.disabled = true;
    checkWinner();
  });
});

let drawGame = () => {
  msg.innerText = "Match drawn";
  msgContainer.classList.remove("hide");
  msgContainer.classList.remove("sparkling");
};

const checkWinner = () => {
  let winnerFound = false;
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      showWinner(pos1);
      winnerFound = true;
      return; // Stop further checking
    }
  }

  if (!winnerFound && count === 9) {
    drawGame();
  }
};

const showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  msgContainer.classList.add("sparkling");

  boxes.forEach((box) => {
    box.disabled = true;
  });
};

// Function to reset the board (used by both new and reset)
const resetBoard = () => {
  turnX = true;
  count = 0;
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    box.classList.remove("x");
    box.classList.remove("o");
  });
  msgContainer.classList.add("hide");
  msgContainer.classList.remove("sparkling");
};

// New Game Button
newBtn.addEventListener("click", () => {
  resetBoard();
});

// Reset Button
resetBtn.addEventListener("click", () => {
  resetBoard();
});
