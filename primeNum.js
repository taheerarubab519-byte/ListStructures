primeInput = prompt("Enter any input in integers to check for prime number or not:");
integer= parseInt(primeInput);
let isPrime = true;

if (integer <= 1 || isNaN(integer)) {
    isPrime = false;
} else {
    for (let i = 2; i < integer; i++) {
        if (integer% i === 0) {
            isPrime = false;
        }
    }
}
if (isPrime) {
    console.log(`${integer} is a prime number.`);
} else {
    console.log(`${integer} is not a prime number.`);
}
