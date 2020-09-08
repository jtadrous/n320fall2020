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

class Drops {
    constructor(drop) {
        this.drop = drop;
        this.speed = 5;
    }

    fall() {
        for (var i = 0; i < 30; i++) {
            circles.push(this.drop.createRect());
        }

        circles.forEach( function() {
            this.drop.y += this.speed;
        })

        this.speed ++;
    }
}

class Raindrop {
    constructor() {
        this.x = random(800);
        this.y = 0;
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
    let circles = [];
}

function draw() {
    background(170, 222, 240);
    fill(51);
    var rect = new Rect(0, 520, 800, 80);
    var drop = new Drops();
    drop.fall();
}