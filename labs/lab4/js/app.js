let counter = 0;

addEventListener("click", onPlayClick)
function onPlayClick(event) {
    if(counter > 9) {
        return;
    } else if(counter % 2 == 0) {
        event.target.xlink:href = oPlayer.png
    } else {
        event.target.xlink:href = oPlayer.png
    }
}