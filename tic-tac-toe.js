document.addEventListener("DOMContentLoaded", function () {
  // get the div element with the ID 'board'
  let board = document.getElementById("board");

  let squares = board.children;

  //initialize an empty array to keep track of the state of the game
  //after each move
  let gameStatus = new Array(9).fill("");
  let currentPlayer = "X";

  console.log("This is the board", squares);

  //add className = square to all squares inside the board
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");
    squares[i].addEventListener("mouseover", function () {
      this.classList.add("hover");
    });
    squares[i].addEventListener("mouseout", function () {
      this.classList.remove("hover");
    });
  }

  // Add an X or O to a square when clicked. This logic prevents the
  // user from clicking on an already filled square.
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      if (!gameStatus[i]) {
        this.classList.add(currentPlayer);
        this.textContent = currentPlayer;
        gameStatus[i] = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X"; // Toggle between X and O
      }
      checkWinner();
    });
  }

  //check for a winner
  function checkWinner() {
    let winner = null;

    // Check rows
    for (let i = 0; i < gameStatus.length; i += 3) {
      if (
        gameStatus[i] &&
        gameStatus[i] === gameStatus[i + 1] &&
        gameStatus[i] === gameStatus[i + 2]
      ) {
        winner = gameStatus[i];
        break; // Add a break to stop checking once a winner is found
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        gameStatus[i] &&
        gameStatus[i] === gameStatus[i + 3] &&
        gameStatus[i] === gameStatus[i + 6]
      ) {
        winner = gameStatus[i];
        break; // Add a break to stop checking once a winner is found
      }
    }

    // Check diagonals
    if (
      gameStatus[0] &&
      gameStatus[0] === gameStatus[4] &&
      gameStatus[0] === gameStatus[8]
    ) {
      winner = gameStatus[0];
    } else if (
      gameStatus[2] &&
      gameStatus[2] === gameStatus[4] &&
      gameStatus[2] === gameStatus[6]
    ) {
      winner = gameStatus[2];
    }

    if (winner) {
      const statusDiv = document.getElementById("status");
      statusDiv.textContent = `Player ${winner} is the winner!`;
      statusDiv.classList.add("you-won");
    }
  }

  // Reset the game
  function restartGame() {
    let resetButton = document.getElementsByClassName("btn")[0];
    resetButton.addEventListener("click", function () {
      gameStatus = new Array(9).fill("");
      currentPlayer = "X";
      for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
        squares[i].classList.remove("hover");
        const statusDiv = document.getElementById("status");
        statusDiv.textContent =
          "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won");
      }
    });
  }

  restartGame();
});
