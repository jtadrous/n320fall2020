class Rect {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    createRect() {
        rect(this.x, this.y, this.width, this.height);
    }
}

class Drop {

}

class Raindrop {
    constructor() {
        this.x = random(800);
        this.y = random(600);
        this.width = 5;
        this.height = 8;
        this.color = [201, 195, 177];
    }

    createDrop() {
        ellipse(this.x, this.y, this.width, this.height, this.color);
    }
}

function setup() {
    createCanvas(800,600);
}

function draw() {
    background(170, 222, 240);
    fill(51);
    var rect = new Rect(0, 520, 800, 80);
    rect.createRect();
    var drop = new Raindrop();
    drop.createDrop();
}