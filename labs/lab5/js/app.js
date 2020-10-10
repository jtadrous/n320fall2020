//Pulled each of the rectangles by their className and pushed them into the shapes array
//let shapes = document.getElementsByClassName("rect");
let shapes = document.getElementById("grid").children;
//shapes.push(document.ge tElementsByClassName("grid"));
console.log(shapes);
//console.log(screen);

//Created a for loop to run through the array of rectangles and animate the opacities to change
for (i = 0; i < shapes.length; i++) {
    console.log(i + " i");
    //Used GreenSock for the animation and delayed the opacity change for each rectangle
    //TweenMax.from(shapes[i], {duration: 3*i, opacity: 0});
    //Added an event for whenever a user mouses over, mouses off, and clicks an element
    //if (shapes[i].className == "grid") {
        let items = shapes[i];
        //document.getElementById("grid").children;
        
        for (x = 0; x < items.length; x++) {
            console.log(x + " x");
            console.log(shapes[i].className);
            TweenMax.from(shapes[i], {duration: 3*i, opacity: 0});
            TweenMax.from(items[x], {duration: 3*i, opacity: 0});
            if (items[x].className == "rect") {
                items[x].addEventListener("mouseover", highLight);
                items[x].addEventListener("mouseout", reColor);
                items[x].addEventListener("click", exitGallery);
            }
        }
    //}
}

/*for (i = 0; i < shapes.length; i++) {
    shapes[i].addEventListener("mouseover", highLight);
    shapes[i].addEventListener("mouseout", reColor);
    shapes[i].addEventListener("click", exitGallery);
}*/

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
    TweenMax.to(event.target, {duration: 1, x: -1000});
}