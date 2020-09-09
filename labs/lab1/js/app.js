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
        fill('rgb(10%, 10%,' + this.color + '%)');
        //created a new rectangle with p5
        rect(this.x, this.y, this.width, this.height);
    }
}

/*Tried to make a manager class, but it didn't work

class Group {
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

//this creates the raindrops class
class Raindrop {
    constructor() {
        //these are all of the attributes for the raindrop ellipses
        this.x = random(800);
        this.y = 0;
        this.width = 5;
        this.height = 8;
        this.color = [201, 195, 177];
        //made the speed random for each raindrop
        this.speed = random(1,5);
    }

    //made a new method to display the raindrop ellipses on the canvas
    createDrop() {
        //adds a random value from 1 to 5 to the y value to make the raindrop move down
        this.y += this.speed;
        //creates an ellipse with the specific attributes
        ellipse(this.x, this.y, this.width, this.height, this.color);
        //if the raindrops hit the top of the ground box
        if(this.y >= 520) {
            //then it adds to the counter and repositions the raindrop at the top of the canvas
            counter ++;
            this.y = 0;
        }
    }
}

//array to hold all the circles
let circles = [];
//new instance of the Rect class
let ground = new Rect(0, 520, 800, 80, 5);
//a counter variable
let counter = 0;

//basic setup function for p5
function setup() {
    createCanvas(800,600);
    //created a for loop to make 30 new instances of the Raindrops class
    for (var i = 0; i < 30; i++) {
        var myRain = new Raindrop();
        //I added each new raindrop to the cirlces array
        circles.push(myRain);
    }
}

//basic draw function for p5
function draw() {
    background(170, 222, 240);
    fill(51);
    noStroke();
    //console.log(circles);
    //console.log(drop);
    //let drop = new Group(circles);

    //made a for loop to update each raindrop's position and speed
    for (var i = 0; i < circles.length; i++) {
        circles[i].createDrop();
    }
    //drop.fall();
    //this initializes the ground rectangle and calls the createRect() method
    ground.createRect();
}