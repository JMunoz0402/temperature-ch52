// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Input: temperature in Celsius
let celsiusTemp = 25; // You can change this value

// Convert Celsius to Fahrenheit
let fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);

// Output the result
console.log(celsiusTemp + "°C is equal to " + fahrenheitTemp + "°F.");
