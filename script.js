
const form = document.getElementById("converterForm");
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const message = document.getElementById("message");
const results = document.getElementById("results");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const temperature = temperatureInput.valueAsNumber;
    const unit = unitSelect.value;

    // Check for empty or invalid input
    if (
        temperatureInput.value.trim() === "" ||
        !Number.isFinite(temperature)
    ) {
        showError("Please enter a valid numeric temperature.");
        return;
    }

    // Convert the input temperature to Celsius first
    let celsius;

    if (unit === "C") {
        celsius = temperature;
    } else if (unit === "F") {
        celsius = (temperature - 32) * 5 / 9;
    } else {
        celsius = temperature - 273.15;
    }

    // Absolute zero is the lowest possible temperature
    if (celsius < -273.15) {
        showError(
            "Invalid temperature! Temperature cannot be below absolute zero."
        );
        return;
    }

    // Convert Celsius to the other units
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    // Display all three results
    celsiusResult.textContent = celsius.toFixed(2) + " °C";
    fahrenheitResult.textContent = fahrenheit.toFixed(2) + " °F";
    kelvinResult.textContent = kelvin.toFixed(2) + " K";

    message.textContent = "Conversion completed successfully!";
    message.className = "success";
    results.hidden = false;
});

function showError(text) {
    message.textContent = text;
    message.className = "error";
    results.hidden = true;
}