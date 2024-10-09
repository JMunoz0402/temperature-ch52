// Function to convert temperature based on the scale
function convertTemperature() {
    // Get the temperature value and scale from the input fields
    let temperature = parseFloat(document.getElementById('temperature').value);
    let scale = document.getElementById('scale').value;

    let convertedTemp;

    // Check the scale and perform the conversion
    if (scale === 'C') {
        // Convert Celsius to Fahrenheit
        convertedTemp = (temperature * 9/5) + 32;
        document.getElementById('result').innerHTML = `${temperature}°C is equal to ${convertedTemp.toFixed(2)}°F`;
    } else if (scale === 'F') {
        // Convert Fahrenheit to Celsius
        convertedTemp = (temperature - 32) * 5/9;
        document.getElementById('result').innerHTML = `${temperature}°F is equal to ${convertedTemp.toFixed(2)}°C`;
    } else {
        document.getElementById('result').innerHTML = 'Invalid scale!';
    }
}