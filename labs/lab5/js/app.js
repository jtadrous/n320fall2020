//Pulled each of the rectangles by their className and pushed them into the shapes array
let shapes = document.getElementsByClassName("canvas");
console.log(shapes);

//Created a for loop to run through the array of rectangles and animate the opacities to change
for (i = 0; i < shapes.length; i++) {
    //Used GreenSock for the animation and delayed the opacity change for each rectangle
    TweenMax.from(shapes[i], {duration: .7*(i+1), opacity: 0});
    
    //Added an event for whenever a user mouses over, mouses off, and clicks an element
    if (shapes[i].className == "rect canvas") {
        shapes[i].addEventListener("mouseover", highLight);
        shapes[i].addEventListener("mouseout", reColor);
        shapes[i].addEventListener("click", exitGallery);
    }
}

//Created a function to change the rectangle color when hovered over
function highLight(event) {
    //Used GreenSock for the animation and changed the element's color to gray
    TweenMax.to(event.target, {backgroundColor: "#adadad"});
}

//Created a function to change the rectangle color back to the original when mouse is off of it
function reColor(event) {
    if (event.target.id == "big") {
        //Used GreenSock for the animation and changed the element's color to light blue
        TweenMax.to(event.target, {backgroundColor: "#84a4e3"});
    } else {
        //Used GreenSock for the animation and changed the element's color to army green
        TweenMax.to(event.target, {backgroundColor: "#6d873a"});
    }
}

//Created a function to make the rectangles exit off screen when each one is clicked
function exitGallery(event) {
    //Used GreenSock for the animation and delayed the x coordinate change for each rectangle
    //this makes each rectangle move left off the screen
    console.log("hello");
    TweenMax.to(event.target, {duration: 1, x: -1000});
}