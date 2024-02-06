const apiKey = "683c68f7c16c6d5a7b57ca0e2cfb0167";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".weather").style.display = "block";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + " %";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weathericon.src = "img/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weathericon.src = "img/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weathericon.src = "img/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "img/drizzle.png";
    }
    else if (data.weather[0].main == "Clouds") {
        weathericon.src = "img/clouds.png";
    }
    else if (data.weather[0].main == "Mist") {
        weathericon.src = "img/mist.png";
    }
}


searchbtn.addEventListener('click', () => {
    checkWeather(searchbox.value);
})
