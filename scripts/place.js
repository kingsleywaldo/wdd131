const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

year.textContent = today.getFullYear();

lastModified.textContent = Last Updated: ${document.lastModified};


// Wind Chill Calculation

const temperature = 28;
const windSpeed = 10;

const windChill = document.querySelector("#windchill");


function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}


if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = ${calculateWindChill(temperature, windSpeed)} °C;
} else {
    windChill.textContent = "N/A";
}