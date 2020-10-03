//Created a variable to act as a counter
let counter = 0;
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