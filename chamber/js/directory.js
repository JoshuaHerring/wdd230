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
    let h2 = document.createElement('h2')
    let birthday = document.createElement('p')
    let birthplace = document.createElement('p')
    let img = document.createElement('img')
    let website = document.createElement("p")


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

getBusinesses(url)