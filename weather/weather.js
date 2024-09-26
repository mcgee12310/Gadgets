// WEATHER APP
const weatherForm = document.querySelector(".weatherForm"); 
const cityInput = document.querySelector(".cityInput"); 
const card = document.querySelector(".card"); 
const apikey = "1f784a485705fe50343843ec2bd78a33";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value;
    if(city){
        try{
            const weatherData = await getWeatherData(city); displayWeatherInfo(weatherData);
        }
        catch(error) {
            console.error(error);
        }
    }
    else{
        displayError("Please enter a city!");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiUrl);
    console.log(response);
    if(!response.ok){
        throw new Error("Could not find city");
    }
    return await response.json();
}

function displayWeatherInfo(data){
    const { name: city,
            main: {temp, humidity},
            weather: [{description, id}]} = data;
    
    cityDisplay = document.getElementById("cityDisplay");
    tempDisplay = document.getElementById("tempDisplay");
    humidityDisplay = document.getElementById("humidityDisplay");
    descDisplay = document.getElementById("descDisplay");
    weatherEmoji = document.getElementById("weatherEmoji");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp-273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    console.log(cityDisplay.textContent);
    card.style.display = "flex";
}

function getWeatherEmoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300): return "🌦";
        case (weatherId >= 300 && weatherId <400): return "⛈";
        case (weatherId >= 500 && weatherId < 600): return "🌧";
        case (weatherId >= 600 && weatherId < 700): return "❄";
        case (weatherId >= 700 && weatherId < 800): return "🌫";
        case (weatherId === 800): return "☀";
        case (weatherId >= 801 && weatherId < 810): return "☁";
        default: return "❓";
    }
}

function displayError (message){
    document.getElementById("cityDisplay").textContent = message;
}