//Template + Object example
var user = {
    id: 1234,
    accountName: "jsmith"
}

var plate = document.getElementById("user");
var copy = plate.content.cloneNode(true);
console.log(copy);
copy.querySelector(".id").innerHTML = "ID: " + user.id;
copy.querySelector(".username").innerHTML = "Username: " + user.accountName;
document.body.appendChild(copy);

//Template String
var animal = {
    type: "cat",
    color: "orange"
}

let tempStr = `
    <h3>Type: ${animal.type}</h3>
    <p>Color: ${animal.color}</p>
`;

let newDiv = document.createElement("div");
newDiv.innerHTML = tempStr;
console.log(newDiv);
document.body.appendChild(newDiv);