class VirtualMachine {
    constructor() {
        this.firstCandy = {name: "Kit-Kat", count: 50, taste:"Sweet"}
        this.secondCandy = {name: "Skittles", count: 50, taste: "Fruity"}
        this.firstChips = {name: "Ruffles", count: 50, taste: "Savory"}
    }

    buySnack(candy) {
        if(candy == "firstCandy") {
            this.firstCandy.count--;
        } else if (candy == "secondCandy") {
            this.secondCandy.conut--;
        } else if (candy == "firstChips"){
            this.firstChips.count--;
        }
        //this.render();
    }

    render() {
        return `
        <h2>${this.firstCandy.name}</h2>
        <ul>
        <li>Taste: ${this.firstCandy.taste}</li>
        <li>Available: ${this.firstCandy.count}</li>
        </ul>
        <button id="firstCandy" onclick="${this.buySnack("firstCandy")}">Buy Candy</button>
        <h2>${this.secondCandy.name}</h2>
        <ul>
        <li>Taste: ${this.secondCandy.taste}</li>
        <li>Available: ${this.secondCandy.count}</li>
        </ul>
        <button id="secondCandy" onclick="${this.buySnack("secondCandy")}">Buy Candy</button>
        <h2>${this.firstChips.name}</h2>
        <ul>
        <li>Taste: ${this.firstChips.taste}</li>
        <li>Available: ${this.firstChips.count}</li>
        </ul>
        <button id="firstChips" onclick="${this.buySnack("firstChips")}">Buy Chips</button>
        `;
    }
}

let myMach = new VirtualMachine();
let myDiv = document.getElementById("info");
myDiv.innerHTML = myMach.render();
console.log(myDiv.innerHTML);