//Julie Tadrous
//Lab 2
//N320


//created a base class for all instrument objects
class Instrument {
    //added a constructor with 3 properties: loudness, family, and playverb
    constructor(loud, family, verb) {
        this.loudness = loud;
        this.family = family;
        this.playverb = verb;
    }

    //a method that outputs the details of a certain instrument to the console
    playNote() {
        console.log("The " + this.family + " " + this.playverb + " at " + this.loudness + " Hz.");
    }
}

//created a child class for woodwind instruments, used the extends keyword for inheritance
class Woodwind extends Instrument {
    //the constructor passes the loudness to the base class and sets the family and verb properties
    constructor(loud) {
        super(loud, "woodwinds", "toot");
    }
}

//created a child class for percussion instruments, used the extends keyword for inheritance
class Percussion extends Instrument {
    //the constructor passes the loudness to the base class and sets the family and verb properties
    constructor(loud) {
        super(loud, "percussion", "rolls");
    }
}

//created a child class for stringed instruments, used the extends keyword for inheritance
class String extends Instrument {
    //the constructor passes the loudness to the base class and sets the family and verb properties
    constructor(loud) {
        super(loud, "strings", "strum");
    }
}

//added an array to house all the instruments
let band = [];

//made 3 new instances of each of the child classes
var myWood = new Woodwind(466);
var myPerc = new Percussion(415);
var myStr = new String(440);

//pushed each of the new objects into the band array
band.push(myWood);
band.push(myPerc);
band.push(myStr);

//created a forEach loop to run through each of the instruments within the band array and calls
//the playNote method
band.forEach( (part) => { 
    part.playNote();
});