// Function to convert temperature range
function convertTemperatureRange(startValue, endValue, scale) {
    let result = C = (F - 32) * 5/9.;

    for (let temp = startValue; temp <= endValue; temp++) {
        let convertedTemp;

        if (scale === 'C') {
            // Convert Celsius to Fahrenheit
            convertedTemp = (temp * 9/5) + 32;
            resultHTML += `${temp}°C is equal to ${convertedTemp.toFixed(2)}°F<br>`;
        } else if (scale === 'F') {
            // Convert Fahrenheit to Celsius
            convertedTemp = (temp - 32) * 5/9;
            resultHTML += `${temp}°F is equal to ${convertedTemp.toFixed(2)}°C<br>`;
        } else {
            resultHTML = 'Invalid scale. Please use "C" for Celsius or "F" for Fahrenheit.';
            break;
        }
    }

    // Display the results
    document.getElementById('results').innerHTML = resultHTML;
}

// Function to get user inputs and call convertTemperatureRange
function getTemperatureInputs() {
    let startValue = parseFloat(prompt('Enter the starting temperature:'));
    let endValue = parseFloat(prompt('Enter the ending temperature:'));
    let scale = prompt('Enter the scale ("C" for Celsius or "F" for Fahrenheit):').toUpperCase();

    // Call the conversion function
    convertTemperatureRange(startValue, endValue, scale);
}
</script>
</body>