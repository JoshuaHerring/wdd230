// date and last modified 1-12

let current_date = document.querySelector("#current_date");
let last_modified = document.querySelector("#last_modified");

let date = new Date();
year = date.getFullYear();
let last_change = document.lastModified;

current_date.innerHTML = year;
last_modified.innerHTML = last_change;

