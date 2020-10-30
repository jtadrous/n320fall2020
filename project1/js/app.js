//Created a variable to act as a counter
let counter = 0;
let winRect = document.getElementById("winRect");
let winText = document.getElementById("winText");

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
        //console.log(box);
        //let move = document.getElementById(box);
        if(counter > 8) {
            //Checks to make sure that the counter is less than 8, if not it returns
            return;
        } else if (type == "O") {
            //Checks to see if the player type is "O", if so it changes the rectangle that was clicked
            //to the O image
            box.setAttribute("xlink:href", "oPlayer.png"); 
        } else if (type == "X") {
            //Changes the rectangle that was clicked to the X image
            box.setAttribute("xlink:href", "xPlayer.png");  
        }
        this.fill = true;
        //console.log(this.fill);
        //console.log(myBoard);
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
    win() {
        //large if statement to check win conditions
        if ((this.grid[0].fillType == "O" && this.grid[1].fillType == "O" && this.grid[2].fillType == "O") ||
            (this.grid[3].fillType == "O" && this.grid[4].fillType == "O" && this.grid[5].fillType == "O") ||
            (this.grid[6].fillType == "O" && this.grid[7].fillType == "O" && this.grid[8].fillType == "O") ||
            (this.grid[0].fillType == "O" && this.grid[4].fillType == "O" && this.grid[8].fillType == "O") ||
            (this.grid[2].fillType == "O" && this.grid[4].fillType == "O" && this.grid[6].fillType == "O") ||
            (this.grid[0].fillType == "O" && this.grid[3].fillType == "O" && this.grid[6].fillType == "O") ||
            (this.grid[1].fillType == "O" && this.grid[4].fillType == "O" && this.grid[7].fillType == "O") ||
            (this.grid[2].fillType == "O" && this.grid[5].fillType == "O" && this.grid[8].fillType == "O")) {
            console.log("O Wins!");
            player2.score++;
            counter = 9;
            winText.innerHTML = "O Wins!";
            winRect.removeAttribute("display");
        } else if ((this.grid[0].fillType == "X" && this.grid[1].fillType == "X" && this.grid[2].fillType == "X") ||
                   (this.grid[3].fillType == "X" && this.grid[4].fillType == "X" && this.grid[5].fillType == "X") ||
                   (this.grid[6].fillType == "X" && this.grid[7].fillType == "X" && this.grid[8].fillType == "X") ||
                   (this.grid[0].fillType == "X" && this.grid[4].fillType == "X" && this.grid[8].fillType == "X") ||
                   (this.grid[2].fillType == "X" && this.grid[4].fillType == "X" && this.grid[6].fillType == "X") ||
                   (this.grid[0].fillType == "X" && this.grid[3].fillType == "X" && this.grid[6].fillType == "X") ||
                   (this.grid[1].fillType == "X" && this.grid[4].fillType == "X" && this.grid[7].fillType == "X") ||
                   (this.grid[2].fillType == "X" && this.grid[5].fillType == "X" && this.grid[8].fillType == "X")) {
                   console.log("X Wins!");
                   player1.score++;
                   counter = 9;
                   winText.innerHTML = "X Wins!";
                   winRect.removeAttribute("display");

        }
    }
    resetIt() {
        console.log("reset");
        console.log(this.size);
        for (let i = 0; i < this.size; i++) {
            //console.log(this.grid[i].element["xlink:href"]);
            //let varName = "Rectangle_" + i;
            //let el = document.getElementById(varName);
            this.grid[i].element.setAttribute("xlink:href", "data:img/png;base64,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");
            counter = 0;
            this.grid[i].fill = false;
            this.grid[i].fillType = "none";
            player2.turn = true;
            player1.turn = false;
            winRect.setAttribute("display", "none");  
            console.log(myBoard);
            //this.grid[i].element.setAttribute("xlink:href", image);
            //console.log(this.grid[i].element.getAttribute("xlink:href"));
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
        let box = document.getElementById(square);
        if (box.getAttribute("xlink:href") == "oPlayer.png" || box.getAttribute("xlink:href") == "xPlayer.png") {
            //Checks to see if the element already has the X or O image, if so then it returns
            return;
        } else if (this.type == "O") {
            //myBoard.sendType(square, "O");
            for (let i = 0; i < board.length; i++) {
                //console.log(this.grid[i]);
                if (board[i].id == square) {
                    //console.log("works");
                    board[i].fillType = this.type;
                    board[i].fillSpace(box, this.type);
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
                    board[i].fillSpace(box, this.type);
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

let reButton = document.getElementById("reset");
//reButton.addEventListener("click", myBoard.resetIt);
reButton.addEventListener('click', function () {
    myBoard.resetIt();
});
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