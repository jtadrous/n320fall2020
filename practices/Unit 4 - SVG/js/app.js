//SVG + JS
let myCircle = document.getElementById("orange");
let response = document.getElementById("response");
let pos = true;
let frame = "";

drawCanvas();
function drawCanvas() {
    y = Number(myCircle.getAttribute("cy"));
    if (y == 150) {
        pos = false;
    } else if (y == 50) {
        pos = true;
    }
    
    if (pos == true) {
        y += 1;
    } else {
        y -= 1;
    }

    myCircle.setAttribute("cy", y);
    frame = requestAnimationFrame(drawCanvas);
}

addEventListener("click", onPlayClick)
function onPlayClick() {
    //let mouse = event.clientY;
    //myCircle.setAttribute("cy", mouse);
    if (y < 105 && y > 95) {
        response = "Congrats, you won!";
        console.log("Congrats, you won!");
    } else {
        response = "Sorry, you lost!";
        console.log("Sorry, you lost!")
    }
    window.cancelAnimationFrame(frame);
}