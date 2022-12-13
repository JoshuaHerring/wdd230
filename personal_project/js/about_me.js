let screen_width = window.innerWidth;
let hero_image = document.querySelector(".hero_img")
if (screen_width >= 800)
{
    hero_image.src = "./images/me.jpg";
}
else
{
    hero_image.src = "./images/me_tall.jpg";
}