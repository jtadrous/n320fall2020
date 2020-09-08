class Rect {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    createRect(){
        rect(this.x, this.y, this.width, this.height);
    }
}

function setup() {
    createCanvas(800,600);
    //fill(51);
}

function draw() {
    background(170, 222, 240);
    fill(51);
    var rect = new Rect(0, 520, 800, 80);
    rect.createRect();
}