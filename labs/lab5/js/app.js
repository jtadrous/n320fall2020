//Created an empty array
let shapes = [];

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
