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

class Group {
    constructor(drops) {
        this.drops = drops;
        this.speed = 5;
    }

    fall() {
        //this.drops.forEach( function() {
            //this.drops.y += this.speed;
        //})

        for (var i = 0; i < this.drops.length; i++) {
            this.drops[i].y += this.speed;
        }

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
}

function draw() {
    background(170, 222, 240);
    fill(51);
    var rect = new Rect(0, 520, 800, 80);

    let circles = [];
    for (var i = 0; i < 30; i++) {
        var myRain = new Raindrop();
        myRain.createDrop();
        circles.push(myRain);
    }
    console.log(circles);
    var drop = new Group(circles);
    console.log(drop);
    drop.fall();
}