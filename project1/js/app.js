//Created a variable to act as a counter
let counter = 0;

//Added an array to store all the elements of the game board
/*let grid = [document.getElementById("Rectangle_0"), document.getElementById("Rectangle_1"), document.getElementById("Rectangle_2"),
document.getElementById("Rectangle_3"), document.getElementById("Rectangle_4"),
document.getElementById("Rectangle_5"), document.getElementById("Rectangle_6"),
document.getElementById("Rectangle_7"), document.getElementById("Rectangle_8")];
console.log(grid);

drawCanvas();
function drawCanvas() {
    requestAnimationFrame(drawCanvas);
}*/

//This listens for when the player clicks on the screen.
//addEventListener("click", onPlayClick);

//I created a function to get the element that the player clicked.
/*function onPlayClick(event) {
    //used the getAttribute method to get the data-name
    if(event.target.getAttribute("data-name") != "Rectangle 2") {
        //Checks to make sure that the object is a rectangle, if not it returns
        return;
    } else if(counter > 8) {
        //Checks to make sure that the counter is less than 8, if not it returns
        return;
    } else if (event.target.getAttribute("xlink:href") == "oPlayer.png" || event.target.getAttribute("xlink:href") == "xPlayer.png") {
        //Checks to see if the element already has the X or O image, if so then it returns
        return;
    } else if(counter % 2 == 0) {
        //Checks to see if the counter is divisible by 2, it so it changes the rectangle that was clicked
        //to the O image
        event.target.setAttribute("xlink:href", "oPlayer.png"); 
    } else {
        //Changes the rectangle that was clicked to the O image
        event.target.setAttribute("xlink:href", "xPlayer.png"); 
    }
    //Adds one to the counter variable
    counter++;
}*/

//Classes
class Space {
    constructor(id, element, fill, fillType) {
      this.id = id;
      this.element = element; //result of document.getElementById
      this.fill = fill; //boolean of whether the space has been filled or not
      this.fillType = fillType; //either X or O or none
    }
    fillSpace(box, type) {
        //console.log("fill", type);
        let move = document.getElementById(box);
        if(counter > 8) {
            //Checks to make sure that the counter is less than 8, if not it returns
            return;
        } else if (move.getAttribute("xlink:href") == "oPlayer.png" || move.getAttribute("xlink:href") == "xPlayer.png") {
            //Checks to see if the element already has the X or O image, if so then it returns
            return;
        } else if (type == "O") {
            //Checks to see if the player type is "O", if so it changes the rectangle that was clicked
            //to the O image
            move.setAttribute("xlink:href", "oPlayer.png"); 
        } else if (type == "X") {
            //Changes the rectangle that was clicked to the X image
            move.setAttribute("xlink:href", "xPlayer.png"); 
        }
        this.fill = true;
        //console.log(this.fill);
        console.log(myBoard);
        myBoard.win();
        //Adds one to the counter variable
        counter++;
    }
}

class Board {
    constructor(size, grid) {
      this.size = size;
      this.grid = grid;
    }
    /*sendType(box, type) {
        for (let i = 0; i < this.grid.length; i++) {
            //console.log(this.grid[i]);
            if (this.grid[i].id == box) {
                //console.log("works");
                this.grid[i].fillType = type;
                this.grid[i].fillSpace(box, type);
            }
        }
    }*/
    reset() {
        console.log("reset");
    }
    win() {
        //large if statement to check win conditions
        if ((this.grid[0].fillType == "O" && this.grid[1].fillType == "O" && this.grid[2].fillType == "O") ||
            (this.grid[3].fillType == "O" && this.grid[4].fillType == "O" && this.grid[5].fillType == "O") ||
            (this.grid[6].fillType == "O" && this.grid[7].fillType == "O" && this.grid[8].fillType == "O") ||
            (this.grid[0].fillType == "O" && this.grid[4].fillType == "O" && this.grid[8].fillType == "O") ||
            (this.grid[0].fillType == "O" && this.grid[4].fillType == "O" && this.grid[6].fillType == "O") ||
            (this.grid[0].fillType == "O" && this.grid[3].fillType == "O" && this.grid[6].fillType == "O") ||
            (this.grid[1].fillType == "O" && this.grid[4].fillType == "O" && this.grid[7].fillType == "O") ||
            (this.grid[2].fillType == "O" && this.grid[5].fillType == "O" && this.grid[8].fillType == "O")) {
            console.log("O Wins!");
            player2.score++;
            counter = 9;
        } else if ((this.grid[0].fillType == "X" && this.grid[1].fillType == "X" && this.grid[2].fillType == "X") ||
                   (this.grid[3].fillType == "X" && this.grid[4].fillType == "X" && this.grid[5].fillType == "X") ||
                   (this.grid[6].fillType == "X" && this.grid[7].fillType == "X" && this.grid[8].fillType == "X") ||
                   (this.grid[0].fillType == "X" && this.grid[4].fillType == "X" && this.grid[8].fillType == "X") ||
                   (this.grid[0].fillType == "X" && this.grid[4].fillType == "X" && this.grid[6].fillType == "X") ||
                   (this.grid[0].fillType == "X" && this.grid[3].fillType == "X" && this.grid[6].fillType == "X") ||
                   (this.grid[1].fillType == "X" && this.grid[4].fillType == "X" && this.grid[7].fillType == "X") ||
                   (this.grid[2].fillType == "X" && this.grid[5].fillType == "X" && this.grid[8].fillType == "X")) {
                   console.log("X Wins!");
                   player1.score++;
                   counter = 9;
        }
    }
}

class Player {
    constructor(score, name, type, turn) {
      this.score = score;
      this.name = name;
      this.type = type;
      this.turn = turn;
    }
    takeTurn(square) {
        //console.log(square);
        if(this.type == "O") {
            //myBoard.sendType(square, "O");
            for (let i = 0; i < board.length; i++) {
                //console.log(this.grid[i]);
                if (board[i].id == square) {
                    //console.log("works");
                    board[i].fillType = this.type;
                    board[i].fillSpace(square, this.type);
                }
            }
            player2.turn = false;
            player1.turn = true;
            console.log(player2);
            console.log(player1);
        } else {
            //console.log("X");
            //myBoard.sendType(square, "X");
            for (let i = 0; i < board.length; i++) {
                //console.log(this.grid[i]);
                if (board[i].id == square) {
                    //console.log("works");
                    board[i].fillType = this.type;
                    board[i].fillSpace(square, this.type);
                }
            }
            player1.turn = false;
            player2.turn = true;
            console.log(player2);
            console.log(player1);
        }
    }
}

//Information
let size = 9;
let board = [];
for (let i = 0; i < size; i++) {
    let varName = "Rectangle_" + i;
    let el = document.getElementById(varName);
    //el.addEventListener("click", fillSpace);
    let mySpace = new Space(varName, el, false, "none");
    board.push(mySpace);
}

console.log(board);
/*for (let i = 0; i < board.length; i++) {
    board[i].getType();
}*/

let myBoard = new Board(size, board);
//console.log(myBoard);

var person1 = prompt("Player 1 (X): Please enter your name.", "Player 1");
var person2 = prompt("Player 2 (O): Please enter your name.", "Player 2");

let player1 = new Player(0, person1, "X", false);
let player2 = new Player(0, person2, "O", true);
//player1.takeTurn();
console.log(player1);
console.log(player2);

function move(event) {
    let square = event.target.getAttribute("id");
    if(player2.turn == true) {
        player2.takeTurn(square);
    } else {
        player1.takeTurn(square);
    }
}

for (let i = 0; i < board.length; i++) {
    let space = board[i].element;
    //console.log(space);
    space.addEventListener("click", move);
}