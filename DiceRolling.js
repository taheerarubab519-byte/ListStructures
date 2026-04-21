let input = prompt("How many times you want to roll a dice?");
let Dice = parseInt(input);
let sum = 0;

console.log(` Rolling ${Dice} dice.`);

if (Dice > 0) {

    for (let i = 1; i <= Dice; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;

        console.log(`Roll #${i}: ${roll}`);
        sum += roll;
    }

    console.log(`Sum of all rolls: ${sum}`);
    alert(`You have rolled ${Dice} dice and total sum of them is: ${sum}`);

} else {
    console.log("Invalid input.");
    alert("Please enter a valid input.");
}
