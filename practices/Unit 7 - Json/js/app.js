fetch ("data/data.json")
.then(response => response.json())
.then(data => displayData(data));

function displayData(x) {
    console.log(x);
}