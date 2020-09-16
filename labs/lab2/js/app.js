class Instrument {
    constructor(loud, family, verb) {
        this.loudness = loud;
        this.family = family;
        this.playverb = verb;
    }

    playNote() {
        console.log(this.family + " " + this.playverb + " at " + this.loudness + ".");
    }
}

class Woodwind {
    constructor() {

    }
}

class Percussion {
    constructor() {

    }
}

class Strings {
    constructor() {

    }
}