//Created an empty array
let shapes = [];

//Added an event for whenever a user mouses over, mouses off, and clicks an element
addEventListener("mouseover", highLight);
addEventListener("mouseout", reColor);
addEventListener("click", exitGallery);

//Pulled each of the rectangles by their ids and pushed them into the shapes array
shapes.push(document.getElementById("small6"));
shapes.push(document.getElementById("small5"));
shapes.push(document.getElementById("small4"));
shapes.push(document.getElementById("small3"));
shapes.push(document.getElementById("small2"));
shapes.push(document.getElementById("small1"));
shapes.push(document.getElementById("big"));
console.log(shapes);

//Created a for loop to run through the array of rectangles and animate the opacities to change
for (i = 0; i < shapes.length; i++) {
    //Used GreenSock for the animation and delayed the opacity change for each rectangle
    TweenMax.to(shapes[i], {duration: 0.7*i, opacity: 1});
}

//Created a function to change the rectangle color when hovered over
function highLight(event) {
    if (event.target.id != "") {
        TweenMax.to(event.target, {backgroundColor: "#adadad"});
    }
}

//Created a function to change the rectangle color back to the original when mouse is off of it
function reColor(event) {
    if (event.target.id == "big") {
        TweenMax.to(event.target, {backgroundColor: "#84a4e3"});
    } else if (event.target.id != "") {
        TweenMax.to(event.target, {backgroundColor: "#6d873a"});
    }
}