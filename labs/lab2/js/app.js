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

class Woodwind {
    constructor() {
        super(466);
    }
}

class Percussion {
    constructor() {
        super(415);
    }
}

class Strings {
    constructor() {
        super(440);
    }
}