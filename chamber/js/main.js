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



localStorage.setItem('msg1', 'Hello Permenant');

sessionStorage.setItem('msg2', 'Hi temporary');