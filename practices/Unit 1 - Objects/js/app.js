class Tree {
    constructor(name,country,height) {
        this.name = name;
        this.country = country;
        this.height = height;
    }
}
var myTree1 = new Tree("Star Magnolia", "Japan", 6.5);
console.log(myTree1);

var myTree2 = {
    name: "Japanese Maple",
    country: ["Japan", "Korea", "Russia", "China"],
    height: 5,
    grow: function() {
        this.height = this.height + 2;
        console.log("My " + this.name + " is now " + this.height + " ft tall.");
    }
}
myTree2.grow();
console.log(myTree2);

class Evergreen extends Tree {
    constructor(name,country,height,kind) {
    super(name,country,height,kind);
    this.kind = "evergreen";
    }
    grow() {
        this.height = this.height + 2;
        console.log("My " + this.name + " is now " + this.height + " ft tall.");
    }
}
var myEver = new Evergreen("Blue Spruce","America",10);
myEver.grow();
console.log(myEver);