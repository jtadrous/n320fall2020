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