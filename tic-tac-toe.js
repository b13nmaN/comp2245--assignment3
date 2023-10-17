document.addEventListener("DOMContentLoaded", function () {
  // get the div element with the ID 'board'
  let board = document.getElementById("board");

  let squares = board.children;

  //initialize an empty array to keep track of the state of the game 
  //after each move
  let gameStatus = [];


  console.log("This is the board", squares);

  //add className = square to all squares inside the board
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");
    squares[i].addEventListener("mouseover", function () {
      this.classList.add("hover");
    })
    squares[i].addEventListener("mouseout", function () {
      this.classList.remove("hover");
    })
  }

  //Add an X or O to a square when clicked
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      if (this.textContent === "") {
        // add class square.X
        this.classList.add("X");
        this.textContent = "X";
        console.log("This is the game status", gameStatus);
        //append move to array
        gameStatus.push("X");
      } else if (this.textContent === "X") {
        // add class square.O
        this.classList.add("O");
        this.textContent = "O";
        //append move to array
        gameStatus.push("O");
      } else {
        this.textContent = "";
      }
    });
  }

});
