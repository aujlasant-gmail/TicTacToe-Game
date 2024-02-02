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
  if (count === 9) {
    drawGame();
  } else {
    for (let pattern of winPatterns) {
      let position1 = boxes[pattern[0]].innerText;
      let position2 = boxes[pattern[1]].innerText;
      let position3 = boxes[pattern[2]].innerText;

      if (position1 !== "" && position2 !== "" && position3 !== "") {
        if (position1 == position2 && position2 == position3) {
          showWinner(position1);
        }
      }
    }
  }
};
