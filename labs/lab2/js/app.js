class Instrument {
    constructor(loud, family, verb) {
        this.loudness = loud;
        this.family = family;
        this.playverb = verb;
    }

    playNote() {
        console.log(this.family + " " + this.playverb + " at " + this.loudness + " Hz.");
    }
}

class Woodwind extends Instrument {
    constructor(family, verb) {
        super(466, family, verb);
    }
}

class Percussion extends Instrument {
    constructor(family, verb) {
        super(415, family, verb);
    }
}

class Strings extends Instrument {
    constructor(family, verb) {
        super(440, family, verb);
    }
}

let band = [];
var myWood = new Woodwind("flute", "toots");
band.push(myWood);
var myPerc = new Percussion("snare drum", "rolls");
band.push(myPerc);
var myStr = new Strings("violin", "strums");
band.push(myStr);

band.forEach( (part) => { 
    part.playNote();
});