let shapes = [];
shapes.push(document.getElementById("small6"));
shapes.push(document.getElementById("small5"));
shapes.push(document.getElementById("small4"));
shapes.push(document.getElementById("small3"));
shapes.push(document.getElementById("small2"));
shapes.push(document.getElementById("small1"));
shapes.push(document.getElementById("big"));
console.log(shapes);

for (i = 0; i < shapes.length; i++) {
    TweenMax.to(shapes[i], {duration: 0.7*i, opacity: 1});
}
