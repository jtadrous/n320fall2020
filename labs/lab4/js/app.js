let counter = 0;
drawCanvas();
function drawCanvas() {
    requestAnimationFrame(drawCanvas);
}

addEventListener("click", onPlayClick)
function onPlayClick(event) {
    if(event.target.getAttribute("data-name") != "Rectangle 2") {
        return;
    } else if(counter > 8) {
        return;
    } else if(counter % 2 == 0) {
        event.target.setAttribute("xlink:href", "oPlayer.png"); 
    } else {
        event.target.setAttribute("xlink:href", "xPlayer.png"); 

    }
    counter++;
}