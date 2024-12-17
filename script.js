const weatherInput = document.querySelector('.weather-input');
const form = document.querySelector('form')
const temp = document.querySelector('.temp')
const cityName = document.querySelector('.city-name')
const main = document.querySelector('.main')
const convertTemp = document.querySelector('.convert-temp')
const weatherIcon = document.querySelector('.weather-icon')

const ApiKey = 'f7b12ea370bf1a0758d6a3200d128722';
let units = 'metric';
// function unitHandler() {
//     if (units === 'metric') {
//         units = 'imperial'
//     } else {
//         units === 'metric'
//     }
// }

convertTemp.addEventListener('click', () => {
    convertTemp.innerText === '°F' ? convertTemp.innerText = '°C' : convertTemp.innerText = '°F'
})

function fetchWeather(city) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=${units}`
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            temp.innerText = `${Math.round(data.main.temp)}°`
            cityName.innerText = data.name
            main.innerText = data.weather[0].main;
            // convertTemp.innerText = '°F' ? '°C' : '°F'
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchWeather('london');
})


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let cityTemperature = weatherInput.value;
    fetchWeather(cityTemperature)
    weatherInput.value = ''
})