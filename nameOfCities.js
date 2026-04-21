let cities = [];

for (let n = 0; n<5; n++) {
    let cityName = prompt(`Enter the name of city ${n + 1}:`);
    cities.push(cityName);
}

console.log("The cities you entered are:");

for (let m = 0; m < cities.length; m++) {
    console.log(cities[m]);
}
