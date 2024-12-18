const weatherInput = document.querySelector('.weather-input');
const form = document.querySelector('form')
const temp = document.querySelector('.temp')
const cityName = document.querySelector('.city-name')
const main = document.querySelector('.main')
const convertTemp = document.querySelector('.convert-temp')
const weatherIcon = document.querySelector('.weather-icon')
const max = document.querySelector('.max')
const min = document.querySelector('.min')
const feelsLike = document.querySelector('.feels-like')
const pressure = document.querySelector('.pressure')
const humidity = document.querySelector('.humidity')
const windSpeed = document.querySelector('.wind-speed')
const visibility = document.querySelector('.visibility')
const cloud = document.querySelector('.cloud')

const ApiKey1 = 'f7b12ea3';
const ApiKey2 = '70bf1a07';
const ApiKey3 = '58d6a320';
const ApiKey4 = '0d128722';
let units = 'metric';
let currentCity = 'new york'

let windUnit = 'm/s';
let degreeUnit = 'C' 

function fetchWeather(city) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey1 + ApiKey2 + ApiKey3 +ApiKey4}&units=${units}`
    )
        .then((res) => res.json())
        .then((data) => {
            temp.innerText = `${Math.round(data.main.temp)}° ${degreeUnit}`
            cityName.innerText = data.name
            main.innerText = data.weather[0].main;
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            max.innerText = `${Math.round(data.main.temp_max)}° ${degreeUnit}`
            min.innerText = `${Math.round(data.main.temp_min)}° ${degreeUnit}`
            feelsLike.innerText = `${Math.round(data.main.feels_like)}° ${degreeUnit}`
            pressure.innerText = `${data.main.pressure} hPa`
            humidity.innerText = `${data.main.humidity} %`
            windSpeed.innerText = `${Math.round(data.wind.speed)} ${windUnit}`
            visibility.innerText = `${data.visibility / 1000} Km`
            cloud.innerText = `${data.clouds.all} %`
        });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchWeather(currentCity);
})


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let cityTemperature = weatherInput.value;
    fetchWeather(cityTemperature)
    if (cityTemperature) {
        currentCity = cityTemperature
        fetchWeather(currentCity)
        weatherInput.value = ''
    }
})

convertTemp.addEventListener('click', ()=>{
    units = units === 'metric' ? 'imperial' : 'metric';
    convertTemp.innerText = units === 'metric' ? '°F' : '°C'
    windUnit = units === 'metric' ? 'm/s' : 'm/h'
    degreeUnit = units === 'metric' ? 'C' : 'F'
    fetchWeather(currentCity)
})