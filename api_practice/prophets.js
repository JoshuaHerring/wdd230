/// Async await fetch

const url = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json"

async function getProphets(requestURL)
{
    const response = await fetch(requestURL)
    console.log(response)
    if (response.ok)
    {
        const jsonObject = await response.json()
        console.log(jsonObject)
        const prophets = jsonObject['prophets']
        console.log(prophets[0].name)
        prophets.forEach(displayProphets)
    }
}

function displayProphets(item)
{
    let card = document.createElement('section')
    let h2 = document.createElement('h2')
    let birthday = document.createElement('p')
    let birthplace = document.createElement('p')
    let img = document.createElement('img')


    h2.innerHTML = item.name + " " + item.lastname
    birthday.innerHTML = item.birthdate
    birthplace.innerHTML = item.birthplace
    img.setAttribute('src', item.imageurl)
    img.setAttribute('alt', item.name + ' ' + item.lastname)

    card.appendChild(h2)
    card.appendChild(birthday)
    card.appendChild(birthplace)
    card.appendChild(img)

    document.querySelector('.cards').appendChild(card)
}

getProphets(url)