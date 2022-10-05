button = document.getElementById("button");
dropDown = document.getElementById("dropDown");
width = screen.width;
if(width <= 580)
{
dropDown.classList.toggle("vanish");
}
function display()
{
    dropDown.classList.toggle("vanish");
}

button.addEventListener("click", display);