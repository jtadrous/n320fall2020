//Created a variable to act as a counter
let counter = 0;

//Added an array to store all the elements of the game board
let board = [document.getElementById("Rectangle_2"), document.getElementById("Rectangle_2-2"),
document.getElementById("Rectangle_2-3"), document.getElementById("Rectangle_2-4"),
document.getElementById("Rectangle_2-5"), document.getElementById("Rectangle_2-6"),
document.getElementById("Rectangle_2-7"), document.getElementById("Rectangle_2-8"),
document.getElementById("Rectangle_2-9")];
console.log(board);

drawCanvas();
function drawCanvas() {
    requestAnimationFrame(drawCanvas);
}

//This listens for when the player clicks on the screen.
addEventListener("click", onPlayClick);

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