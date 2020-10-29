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
function onPlayClick(event) {
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
}

let size = 9;

class Space {
    constructor(id, element, fill) {
      this.id = id;
      this.element = element; //result of document.getElementById
      this.fill = fill; //boolean of whether the space has been filled or not
    }
    getType() {
        console.log("type");
    }
    fillSpace() {
        console.log("fill");
    }
}

let board = [];
for (let i = 0; i < size; i++) {
    let varName = "Rectangle_" + i;
    let el = document.getElementById(varName);
    el.addEventListener("click", onPlayClick);
    let mySpace = new Space(i, el, false);
    board.push(mySpace);
}

console.log(board);

class Board {
    constructor(size, grid) {
      this.size = size;
      this.grid = grid;
    }
    sendType() {

    }
    win() {

    }
}
let myBoard = new Board(size, board);

/*class Player {
    constructor(score, name, type, turn) {
      this.score = score;
      this.name = name;
      this.type = type;
      this.turn = turn;
    }
    takeTurn() {

    }
}
let player1 = new Player();
let player2 = new Player();*/