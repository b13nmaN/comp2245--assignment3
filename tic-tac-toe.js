document.addEventListener("DOMContentLoaded", function () {
  // get the div element with the ID 'board'
  let board = document.getElementById("board");

  let squares = board.children;

  console.log("This is the board", squares);

  //add className = square to all squares inside the board
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");
    
  }
});
