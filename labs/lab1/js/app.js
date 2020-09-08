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
        this.x = random(800);
        this.y = random(600);
        this.color = [201, 195, 177];
    }

    createDrop() {
        
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