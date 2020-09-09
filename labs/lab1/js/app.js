//Julie Tadrous
//9/8/2020
//N320

class Rect {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    createRect() {
        if(counter >= 10 && counter % 10 == 0) {
            this.color ++;
        }
        fill('rgb(30%, 10%,' + this.color + '%)');
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

let circles = [];
var rect = new Rect(0, 520, 800, 80);
let counter = 0;

function setup() {
    createCanvas(800,600);
    for (var i = 0; i < 30; i++) {
        var myRain = new Raindrop();
        //myRain.createDrop();
        circles.push(myRain);
    }
}

function draw() {
    background(170, 222, 240);
    fill(51);
    noStroke();
    circles.forEach( (circle) => { 
        circle.createDrop();
    })
    
    //console.log(circles);
    //var drop = new Group(circles);
    //console.log(drop);
    //drop.fall();
    rect.createRect();
}