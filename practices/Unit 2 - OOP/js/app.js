//inheritance and polymorphism
class Vehicle {
	constructor(type, speed) {
        this.type = type;
        this.speed = speed;
    }
	drive() {
	    console.log("The " + this.type + " is driving at " + this.speed + " mph.");
    }
}

class Truck extends Vehicle {
	constructor(speed) {
        super("truck", speed);
    }
}

class Car extends Vehicle {
	constructor(speed) {
        super("car", speed);
    }
}

var myCar = new Car(50);
var myTruck = new Truck(70);
myCar.drive();
myTruck.drive();

//encapsulation
class Date {
    constructor(year) {
        this.year = year;
    }

    setYear(newYear) {
        if(typeof(newYear) == "number") {
            this.year = newYear;
        } else {
            console.error("A number was not entered. Cannot set year.");
        }
    }

    getYear() {
        return this.year;
    }
}

var today1 = new Date();
today1.setYear(2020);
var result1 = today1.getYear();
console.log("The year is " + result1 + ".");

var today2 = new Date();
today2.setYear("2020");
var result2 = today2.getYear();
console.log("The year is " + result2 + ".");