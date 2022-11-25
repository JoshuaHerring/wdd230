const url = "https://joshuaherring.github.io/wdd230/chamber/directory.json"

async function getBusinesses(requestURL)
{
    const response = await fetch(requestURL)
    console.log(response)
    if (response.ok)
    {
        const jsonObject = await response.json()
        console.log(jsonObject)
        const businesses = jsonObject['businesses']
        console.log(businesses[0].name)
        businesses.forEach(displayBusinesses)
        if (width >= 650 && width <= 800)
            {
                displayListForm()
            }
    }
}

function displayBusinesses(item)
{
    let card = document.createElement('section')
    card.setAttribute("class", "sections")
    let h2 = document.createElement('h2')
    let birthday = document.createElement('p')
    let birthplace = document.createElement('p')
    let img = document.createElement('img')
    let website = document.createElement("a")


    h2.innerHTML = item.name
    birthday.innerHTML = item.address
    birthplace.innerHTML = item.phone
    img.setAttribute('src', item.logo)
    img.setAttribute('alt', item.name + " logo")
    img.setAttribute('class', 'images')
    website.innerHTML = (item.name + " Website Link")
    website.setAttribute('src', item.website)

    card.appendChild(h2)
    card.appendChild(birthday)
    card.appendChild(birthplace)
    card.appendChild(img)
    card.appendChild(website)

    document.querySelector('.cards').appendChild(card)
}

function displayCardForm()
{
    card = document.querySelector(".cards")
    images = document.querySelectorAll(".images");
    sections = document.querySelectorAll(".sections");
    card.classList.add("card_form")
    card.classList.remove("block")
    images.forEach((img) =>{img.classList.remove("gone")});
    sections.forEach((section) =>{section.classList.remove("list_form")});
}

function displayListForm()
{
    card = document.querySelector(".cards");
    images = document.querySelectorAll(".images");
    sections = document.querySelectorAll(".sections");
    card.classList.add("block");
    card.classList.remove("card_form");
    images.forEach((img) =>{img.classList.add("gone")});
    sections.forEach((section) =>{section.classList.add("list_form")});
}




function handleEventListner()
{
    let listButton = document.getElementById("list_button")
    let cardButton = document.getElementById("card_button")
    listButton.addEventListener("click", displayListForm)
    cardButton.addEventListener("click", displayCardForm)
}
let width = window.innerWidth

getBusinesses(url)
displayCardForm()
handleEventListner()