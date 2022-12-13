const api_url = "https://api.openweathermap.org/data/2.5/weather?lat=43.826&lon=-111.790&appid=92ce6425ce6e4ca46b7b78c529993dfc";
// const api_url = "https://api.openweathermap.org/data/2.5/weather?lat=40.5308&lon=-112.2983&appid=92ce6425ce6e4ca46b7b78c529993dfc"


const temp = document.getElementById("temp")
const cloud_coverage = document.getElementById("cloud_coverage")
const wind_speed = document.getElementById("wind_speed")
const wind_chill = document.getElementById("wind_chill")
const icon = document.getElementById("weather_icon")

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
    wind_chill.innerHTML = calculate_wind_chill(jsonObject)
    icon.setAttribute("src", "https://openweathermap.org/img/w/" + jsonObject["weather"][0]["icon"] + ".png")
    // console.log( "&#" + jsonObject["weather"][0]["icon"] + ";")
}

function kelvinToFarenheight(kelvin)
{
    let farenheight = (kelvin - 273.15) * 9/5 + 32
    farenheight = farenheight.toFixed(2)
    return farenheight
}

getWeather(api_url);

function calculate_wind_chill(jsonObject)
{
    let degress_f = parseInt(kelvinToFarenheight(jsonObject["main"]["temp"]));
    let wind_mph = parseInt(jsonObject["wind"]["speed"]);
    
    
    if (degress_f <=50 && wind_mph > 3)
    {
        let chill = Math.round((35.74 + (0.6215 * degress_f)) - (35.75 * Math.pow(wind_mph,0.16)) + (0.4275 * degress_f * Math.pow(wind_mph,0.16)))
        return(chill + "&#8457;")
    }
    
    else
    {
        return "N/A";
    }
}
    