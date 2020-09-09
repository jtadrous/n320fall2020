//Julie Tadrous
//9/8/2020
//N320

//this creates the Rectangle or ground class
class Rect {
    constructor(x, y, width, height, color) {
        //these are all of the attributes for the ground rectangle
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    //made a new method to display the ground on the canvas
    createRect() {
        //every 10 raindrops, the color will go up
        if(counter >= 10 && counter % 10 == 0) {
            this.color ++;
        }
        //this makes it so only the blue part of rgb increases
        fill('rgb(25%, 10%,' + this.color + '%)');
        rect(this.x, this.y, this.width, this.height);
    }
}

/*class Group {
    constructor(drops) {
        this.drops = drops;
        this.speed = random(1,5);
    }

    fall() {
        circles.forEach( (circle) => { 
            circle.y += this.speed;
            circle.createDrop();
        })

        //for (var i = 0; i < this.drops.length; i++) {
            //this.drops[i].y += this.speed;
        //}

        //this.speed ++;

        if(this.drops.y >= 520) {
            counter ++;
            this.drops.y = 0;
        }
        return counter
    }
}*/

class Raindrop {
    constructor() {
        this.x = random(800);
        this.y = 0;
        this.width = 5;
        this.height = 8;
        this.color = [201, 195, 177];
        this.speed = random(1,5);
    }

    createDrop() {
        this.y += this.speed;
        ellipse(this.x, this.y, this.width, this.height, this.color);
        if(this.y >= 520) {
            counter ++;
            this.y = 0;
        }
    }
}

let circles = [];
let ground = new Rect(0, 520, 800, 80, 5);
let counter = 0;

function setup() {
    createCanvas(800,600);
    for (var i = 0; i < 30; i++) {
        var myRain = new Raindrop();
        circles.push(myRain);
    }
}

function draw() {
    background(170, 222, 240);
    fill(51);
    noStroke();
    //console.log(circles);
    //console.log(drop);
    //let drop = new Group(circles);
    for (var i = 0; i < circles.length; i++) {
        circles[i].createDrop();
    }
    //drop.fall();
    ground.createRect();
}