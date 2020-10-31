//Created a variable to act as a counter
let counter = 0;
let winRect = document.getElementById("winRect");
let winText = document.getElementById("winText");
let scoreText = document.getElementById("scoreText");

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
            myBoard.win();
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
        console.log(counter);
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
            TweenMax.from(winRect, {duration: 1, opacity: 0});
            scoreText.innerHTML = person1 + " (X): " + player1.score + "\n" + person2 + " (O): " + player2.score;
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
                   TweenMax.from(winRect, {duration: 1, opacity: 0});
                   scoreText.innerHTML = person1 + " (X): " + player1.score + "\n" + person2 + " (O): " + player2.score;
        } else if (counter > 7) {
                   console.log("Cat Game!");
                   winText.style.fontSize = 130;
                   winText.innerHTML = "Cat Game!";
                   winRect.removeAttribute("display");
                   TweenMax.from(winRect, {duration: 1, opacity: 0});
        }
    }
    resetIt() {
        //console.log("reset");
        //console.log(this.size);
        for (let i = 0; i < this.size; i++) {
            //console.log(this.grid[i].element["xlink:href"]);
            //let varName = "Rectangle_" + i;
            //let el = document.getElementById(varName);
            this.grid[i].element.setAttribute("xlink:href", "data:img/png;base64,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");
            counter = 0;
            this.grid[i].fill = false;
            this.grid[i].fillType = "none";
            player2.turn = false;
            player1.turn = true;
            //winText.setAttribute("x", 470);
            //winText.setAttribute("font-size", 170);
            winText.style.fontSize = 170;
            winRect.setAttribute("display", "none");  
            //console.log(myBoard);
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
            //console.log(player2);
            //console.log(player1);
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
            //console.log(player2);
            //console.log(player1);
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

var person1 = prompt("Player X: Please enter your name.", "Player 1");
var person2 = prompt("Player O: Please enter your name.", "Player 2");

scoreText.innerHTML = person1 + " (X): 0" + "\n" + person2 + " (O): 0";

let player1 = new Player(0, person1, "X", true);
let player2 = new Player(0, person2, "O", false);
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