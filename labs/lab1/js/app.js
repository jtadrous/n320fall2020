function draw() {

}

function setup() {
    createCanvas(800,600);
    background(170, 222, 240);
    fill(51);
    rect(0, 520, 800, 80);
}

class Rect {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}