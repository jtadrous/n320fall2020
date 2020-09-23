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
            this.secondCandy.count--;
        } else if (candy == "firstChips"){
            this.firstChips.count--;
        }
        myDiv.innerHTML = this.render();
    }

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

let myMach = new VirtualMachine();
let myDiv = document.getElementById("info");
myDiv.innerHTML = myMach.render();