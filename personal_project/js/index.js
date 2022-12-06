/// Handles the hero image picture changing

let screen_width = window.innerWidth;
let hero_image = document.querySelector(".hero_img")
if (screen_width >= 800)
{
    hero_image.src = "./images/forest_wide.webp"
}