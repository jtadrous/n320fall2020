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
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    createDrop() {
        let x = random(800);
        let y = random(600);
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
}