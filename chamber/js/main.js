button = document.getElementById("button");
dropDown = document.getElementById("dropDown");
width = screen.width;

dropDown.classList.toggle("vanish");

function display()
{
    dropDown.classList.toggle("vanish");
}

button.addEventListener("click", display);

var date = new Date();
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

if (!localStorage.getItem("last_visit"))
{
    localStorage.setItem("last_visit", Date.now())
    document.getElementById("diff").innerHTML = "Welcome to your first visit!"
}

else
{
    calculate_difference();
}

function calculate_difference()
{
    let last_date = localStorage.getItem("last_visit");
    let current_date = Date.now();
    // let current_date = new Date("2023-03-24");

    let difference = current_date - last_date;
    console.log(current_date);
    console.log(last_date);
    console.log(difference);
    let days_difference = Math.floor(difference/1000/60/60/24);

    document.getElementById("diff").innerHTML = days_difference;

    localStorage.setItem("last_visit", Date.now());
}


// Join page date handling
const date = new Date();

document.querySelector("#formDate").value = date;
