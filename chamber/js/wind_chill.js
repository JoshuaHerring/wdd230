let temp = document.getElementById("temp");
let wind_speed = document.getElementById("wind_speed");
let wind_chill = document.getElementById("wind_chill")

degress_f = parseInt(temp.innerHTML);
wind_mph = parseInt(wind_speed.innerHTML);


if (degress_f <=50 && wind_mph > 3)
{
    let chill = Math.round((35.74 + (0.6215 * degress_f)) - (35.75 * Math.pow(wind_mph,0.16)) + (0.4275 * degress_f * Math.pow(wind_mph,0.16)))
    wind_chill.innerHTML = chill + "&#8457;";
}

else
{
    wind_chill.innerHTML = "N/A";
}