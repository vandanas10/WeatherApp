const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '43f9c59b00msh4b446aee8758043p1e1465jsn973e4552b205',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

// Array of city names for which you want to fetch weather data by default
const defaultCities = ['Shanghai', 'Boston', 'Lucknow', 'Kolkata'];

async function fetchWeatherForCity(city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Assuming the response is JSON data
        return data; // Return the weather data
    } catch (error) {
        console.error(`Error fetching weather data for ${city}:`, error);
        return null; // Return null in case of error
    }
}

async function updateWeatherTable() {
    for (const city of defaultCities) {
        const data = await fetchWeatherForCity(city);
        if (data) {
            // Update HTML elements in the table with weather data
            document.getElementById(`${city.toLowerCase()}_cloudPT`).textContent = data.cloud_pct;
            document.getElementById(`${city.toLowerCase()}_temp`).textContent = data.temp;
            document.getElementById(`${city.toLowerCase()}_feelsLike`).textContent = data.feels_like;
            document.getElementById(`${city.toLowerCase()}_humidity`).textContent = data.humidity;
            document.getElementById(`${city.toLowerCase()}_minTemp`).textContent = data.min_temp;
            document.getElementById(`${city.toLowerCase()}_maxTemp`).textContent = data.max_temp;
            document.getElementById(`${city.toLowerCase()}_windSpeed`).textContent = data.wind_speed;
            document.getElementById(`${city.toLowerCase()}_windDegrees`).textContent = data.wind_degrees;
            document.getElementById(`${city.toLowerCase()}_sunrise`).textContent = data.sunrise;
            document.getElementById(`${city.toLowerCase()}_sunset`).textContent = data.sunset;
        }
    }
}

document.getElementById('submit').addEventListener('click', async function (e) {
    e.preventDefault(); // Prevent default form submission
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value.trim(); // Trim any whitespace from the input

    // Check if the input value is not empty
    if (city) {
        const data = await fetchWeatherForCity(city);
        if (data) {
            // Update HTML elements in the weather card with weather data
            const temperature = data.temp;
            const humidityy = data.humidity;
            const windSpeed = data.wind_speed;
            document.getElementById('city_name').innerHTML = city;
            document.getElementById('Temp').textContent = temperature;
            document.getElementById('Temp2').textContent = temperature;
            document.getElementById('Feels_like').innerHTML = data.feels_like;
            document.getElementById('Humidity').textContent = humidityy;
            document.getElementById('humidity2').textContent = humidityy;
            document.getElementById('Min_temp').innerHTML = data.min_temp;
            document.getElementById('Max_temp').innerHTML = data.max_temp;
            document.getElementById('Wind_speed').textContent = windSpeed;
            document.getElementById('Wind_speed2').textContent = windSpeed;
            document.getElementById('Wind_degrees').innerHTML = data.wind_degrees;
            document.getElementById('Sunrise').innerHTML = data.sunrise;
            document.getElementById('Sunset').innerHTML = data.sunset;

            // Clear the input field after submitting
            cityInput.value = '';
        }
    } else {
        alert('Please enter a city name.'); // Show an alert if the input is empty
    }
});


// Call the function to update weather data for default cities
updateWeatherTable();

// Fetch weather data for the default city 'Delhi' and update the weather card
fetchWeatherForCity('Delhi').then(data => {
    if (data) {
        const temperature = data.temp;
        const humidityy = data.humidity;
        const windSpeed = data.wind_speed;
        document.getElementById('city_name').innerHTML = 'Delhi';
        document.getElementById('Temp').textContent = temperature;
        document.getElementById('Temp2').textContent = temperature;
        document.getElementById('Feels_like').innerHTML = data.feels_like;
        document.getElementById('Humidity').textContent = humidityy;
        document.getElementById('humidity2').textContent = humidityy;
        document.getElementById('Min_temp').innerHTML = data.min_temp;
        document.getElementById('Max_temp').innerHTML = data.max_temp;
        document.getElementById('Wind_speed').textContent = windSpeed;
        document.getElementById('Wind_speed2').textContent = windSpeed;
        document.getElementById('Wind_degrees').innerHTML = data.wind_degrees;
        document.getElementById('Sunrise').innerHTML = data.sunrise;
        document.getElementById('Sunset').innerHTML = data.sunset;
    }
});

document.getElementById('About').addEventListener('click', function () {
    window.location.href = 'about.html';
});

const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})