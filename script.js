var date = new Date();
console.log(date);
var year = date.getFullYear();
console.log(year);

document.querySelector("#date").innerHTML = year;

let current_date = document.lastModified;
document.querySelector("#last_updated").innerHTML = current_date;