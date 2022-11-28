// location path https://joshuaherring.github.io/wdd230/chamber/{file-name}

button = document.getElementById("button");
dropDown = document.getElementById("dropDown");
width = screen.width;

dropDown.classList.toggle("vanish");

function display()
{
    dropDown.classList.toggle("vanish");
}

button.addEventListener("click", display);

const date = new Date();
console.log(date);
var year = date.getFullYear();
console.log(year);

document.querySelector("#date").innerHTML = year;

let current_date = document.lastModified;
document.querySelector("#last_updated").innerHTML = current_date;

// handles the pop up
pop_up = document.getElementById("pop");

var day = date.getDay();

if (day == 1 || day == 2)
{
    pop_up.classList.toggle("pop_up_vanish");
}

console.log(day);

// Local storage display of days since last visit
console.log(window.location.href)
if (window.location.href == "https://joshuaherring.github.io/wdd230/chamber/discover.html" || window.location.href == "http://localhost:5500/chamber/discover.html")
{
if (!localStorage.getItem("last_visit"))
{
    localStorage.setItem("last_visit", Date.now())
    document.getElementById("diff").innerHTML = "Welcome to your first visit!"
}

else
{
    calculate_difference();
}
}

function calculate_difference()
{
    let last_date = localStorage.getItem("last_visit");
    let current_date = Date.now();


    let difference = current_date - last_date;
    console.log(current_date);
    console.log(last_date);
    console.log(difference);
    let days_difference = Math.floor(difference/1000/60/60/24);

    document.getElementById("diff").innerHTML = days_difference;

    localStorage.setItem("last_visit", Date.now());
}


// Join page date handling
const currentDate = new Date();
// document.querySelector("#formDate").value = currentDate;


// Weather handaling happens here

const temp = document.getElementById("temp")
const cloud_coverage = document.getElementById("cloud_coverage")
const wind_speed = document.getElementById("wind_speed")
const wind_chill = document.getElementById("wind_chill")
const icon = document.getElementById("weather_icon")
// [40.5308, -112.2983]     coords to my town
const api_url = "https://api.openweathermap.org/data/2.5/weather?lat=40.5308&lon=-112.2983&appid=92ce6425ce6e4ca46b7b78c529993dfc"

async function getWeather(api_url)
{
    const response = await fetch(api_url)
    console.log(response)
    if(response.ok)
    {
        const jsonObject = await response.json()
        console.log(jsonObject)
        displayWeather(jsonObject)
    }
}

function displayWeather(jsonObject)
{
    temp.innerHTML = "   " + kelvinToFarenheight(jsonObject["main"]["temp"])
    cloud_coverage.innerHTML = jsonObject["weather"][0]["description"]
    wind_speed.innerHTML = jsonObject["wind"]["speed"]
    icon.setAttribute("src", "https://openweathermap.org/img/w/" + jsonObject["weather"][0]["icon"] + ".png")
    // console.log( "&#" + jsonObject["weather"][0]["icon"] + ";")
}

function kelvinToFarenheight(kelvin)
{
    let farenheight = (kelvin - 273.15) * 9/5 + 32
    farenheight = farenheight.toFixed(2)
    return farenheight

}
if (window.location.href == "https://joshuaherring.github.io/wdd230/chamber/index.html" || window.location.href == "http://localhost:5500/chamber/index.html")
{
getWeather(api_url)
}