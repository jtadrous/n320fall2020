//new class that represents the overall vending machine
class VirtualMachine {
    constructor() {
        //three properties in this class: one for each snack (each snack holds an object with details)
        this.firstCandy = {name: "Kit-Kat", count: 50, taste:"Sweet"}
        this.secondCandy = {name: "Skittles", count: 50, taste: "Fruity"}
        this.firstChips = {name: "Ruffles", count: 50, taste: "Savory"}
    }

    //this method receives the name of the button that was pressed and changes the according count number
    buySnack(candy) {
        //this if statement checks to see if the button name equals the name of the object and if the
        //count number is greater than zero
        if(candy == "firstCandy" && this.firstCandy.count > 0) {
            //then it subtracts one from the candy count number
            this.firstCandy.count--;
        } else if (candy == "secondCandy" && this.secondCandy.count > 0) {
            this.secondCandy.count--;
        } else if (candy == "firstChips" && this.firstChips.count > 0){
            this.firstChips.count--;
        }
        //after running the if statement, it will resubmit the template to the HTML div by calling
        //the render() method
        myDiv.innerHTML = this.render();
    }

    //created a new method called render() to return a JS Template string of HTML code displaying
    //the information within the snack objects
    render() {
        return `
        <h2>${this.firstCandy.name}</h2>
        <ul>
        <li>Type: ${this.firstCandy.taste}</li>
        <li>Available: ${this.firstCandy.count}</li>
        </ul>
        <h2>${this.secondCandy.name}</h2>
        <ul>
        <li>Type: ${this.secondCandy.taste}</li>
        <li>Available: ${this.secondCandy.count}</li>
        </ul>
        <h2>${this.firstChips.name}</h2>
        <ul>
        <li>Type: ${this.firstChips.taste}</li>
        <li>Available: ${this.firstChips.count}</li>
        </ul>
        `;
    }
}

//this variable holds a new instance of the VirtualMachine() class, basically I created a new
//vending machine.
let myMach = new VirtualMachine();
//this line grabs the HTML element with the id of "info" and stores it in a variable
let myDiv = document.getElementById("info");
//this line sets the innerHTML of that HTML element to the new template within the render() method
myDiv.innerHTML = myMach.render();