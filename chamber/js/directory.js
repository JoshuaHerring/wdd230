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
    card.classList.add("card_form")
    card.classList.remove("list_form")
}

function displayListForm()
{
    card = document.querySelector(".cards")
    card.classList.add("list_form")
    card.classList.remove("card_form")
    
}


function handleEventListner()
{
    let listButton = document.getElementById("list_button")
    let cardButton = document.getElementById("card_button")
    listButton.addEventListener("click", displayListForm)
    cardButton.addEventListener("click", displayCardForm)
}
let width = window.innerWidth
console.log(width)

getBusinesses(url)
displayCardForm()
if (width >= 650 && width <= 800)
{
    displayListForm()
}
handleEventListner()