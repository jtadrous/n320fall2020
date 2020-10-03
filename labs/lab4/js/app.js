let counter = 0;
drawCanvas();
function drawCanvas() {
    requestAnimationFrame(drawCanvas);
}

addEventListener("click", onPlayClick)
function onPlayClick(event) {
    //console.log(event.target.getAttribute("xlink:href"));
    if(event.target.getAttribute("data-name") != "Rectangle 2") {
        return;
    } else if(counter > 8) {
        return;
    } else if(counter % 2 == 0) {
        event.target.setAttribute("xlink:href", "oPlayer.png"); 
        //console.log(event.target.getAttribute("xlink:href"));
        //console.log(event.target.id)
        //console.log(counter);
        //console.log(counter % 2);
    } else {
        event.target.setAttribute("xlink:href", "xPlayer.png"); 
        //console.log(event.target.id);
        //console.log(counter);
        //console.log(counter % 2);
    }
    console.log(counter);
    counter++;
}