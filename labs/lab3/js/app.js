class VirtualMachine {
    constructor() {
        this.firstCandy = {name: "Kit-Kat", count: 50, taste:"sweet"}
        this.secondCandy = {name: "Skittles", count: 50, taste: "fruity"}
        this.firstChips = {name: "Ruffles", count: 50, taste: "savory"}
    }

    buySnack() {

    }

    render() {
        return `
        <h2>${this.firstCandy.name}</h2>
        <ul>
        <li>${this.firstCandy.taste}</li>
        <li>${this.firstCandy.count}</li>
        </ul>
        <button onclick=""></button>
        <h2>${this.secondCandy.name}</h2>
        <ul>
        <li>${this.secondCandy.taste}</li>
        <li>${this.secondCandy.count}</li>
        </ul>
        <button onclick=""></button>
        <h2>${this.firstChips.name}</h2>
        <ul>
        <li>${this.firstChips.taste}</li>
        <li>${this.firstChips.count}</li>
        </ul>
        <button onclick=""></button>
        `;
    }
}