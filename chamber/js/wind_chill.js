let temperature = document.getElementById("temp");
let windy_speed = document.getElementById("wind_speed");
let windy_chill = document.getElementById("wind_chill")

degress_f = parseInt(temperature.innerHTML);
wind_mph = parseInt(windy_speed.innerHTML);


if (degress_f <=50 && wind_mph > 3)
{
    let chill = Math.round((35.74 + (0.6215 * degress_f)) - (35.75 * Math.pow(wind_mph,0.16)) + (0.4275 * degress_f * Math.pow(wind_mph,0.16)))
    windy_chill.innerHTML = chill + "&#8457;";
}

else
{
    windy_chill.innerHTML = "N/A";
}