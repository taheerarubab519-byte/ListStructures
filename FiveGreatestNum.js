let numbers = [];
let input1 = prompt("Enter a number:");

while (input1 !== "" && input1 !== null) {
    let num = parseFloat(input1);

    if (!isNaN(num)) {
        numbers.push(num);
    }

    input1 = prompt("Enter a number / leave empty to end the program:");
}

numbers.sort((a, b) => b - a);
let fiveGreatestValues = numbers.slice(0, 5);

console.log("The five greatest numbers are:" );
for (let i = 0; i < fiveGreatestValues.length; i++) {
    console.log(fiveGreatestValues[i]);
}