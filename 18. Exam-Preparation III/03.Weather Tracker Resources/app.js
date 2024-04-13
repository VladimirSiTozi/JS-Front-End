const baseUrl = 'http://localhost:3030/jsonstore/tasks'

let currentWeatherId 

// Elements
const locationInputElement = document.getElementById('location')
const temperatureInputElement = document.getElementById('temperature')
const dateInputElement = document.getElementById('date')

const weatherListElement = document.getElementById('list')

// Buttons
const loadHistoryButton = document.getElementById('load-history')
const addWeatherButton = document.getElementById('add-weather')
const editWeatherButton = document.getElementById('edit-weather')

// Events
loadHistoryButton.addEventListener('click', () => {
    loadWeatherFunc()
})

addWeatherButton.addEventListener('click', () => {
    if (locationInputElement.value && temperatureInputElement.value && dateInputElement.value){
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "location": locationInputElement.value,
                "temperature": temperatureInputElement.value,
                "date": dateInputElement.value,
            })
        })
            .then(res => {if (!res.ok) {
                return;}})
            
            locationInputElement.value = ''
            temperatureInputElement.value = ''
            dateInputElement.value = ''

            loadWeatherFunc()
    }
})

editWeatherButton.addEventListener('click', () => {
    fetch(`${baseUrl}/${currentWeatherId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "location": locationInputElement.value,
            "temperature": temperatureInputElement.value,
            "date": dateInputElement.value,
            "_id": currentWeatherId
        })
    })

    editWeatherButton.setAttribute('disabled', 'disabled')
    addWeatherButton.removeAttribute('disabled')

    locationInputElement.value = ''
    temperatureInputElement.value = ''
    dateInputElement.value = ''

    loadWeatherFunc()
})

function loadWeatherFunc() {
    weatherListElement.innerHTML = ''

    fetch(baseUrl)
    .then(res => res.json())
    .then(elements => {
        for (const element of Object.values(elements)) {
            const cityH2Element = document.createElement('h2')
            cityH2Element.textContent = element.location
            const dateH3Element = document.createElement('h3')
            dateH3Element.textContent = element.date
            const degreesH3Element = document.createElement('h3')
            degreesH3Element.setAttribute('id', 'celsius')
            degreesH3Element.textContent = element.temperature

            const weatherId = element._id
            currentWeatherId = weatherId 

            const changeButton = document.createElement('button')
            changeButton.classList.add('change-btn')
            changeButton.textContent = 'Change'
            const deleteButton = document.createElement('button')
            deleteButton.classList.add('delete-btn')
            deleteButton.textContent = 'Delete'

            const buttonsDivElement = document.createElement('div')
            buttonsDivElement.classList.add('buttons-container')
            buttonsDivElement.appendChild(changeButton)
            buttonsDivElement.appendChild(deleteButton)

            const containerDivElement = document.createElement('div')
            containerDivElement.classList.add('container')
            containerDivElement.appendChild(cityH2Element)
            containerDivElement.appendChild(dateH3Element)
            containerDivElement.appendChild(degreesH3Element)
            containerDivElement.appendChild(buttonsDivElement)

            weatherListElement.appendChild(containerDivElement)

             // Change Button
            changeButton.addEventListener('click', () => {
                const parent = changeButton.parentElement.parentElement
                locationInputElement.value = parent.querySelector('h2').textContent
                temperatureInputElement.value = parent.querySelector('h3:last-of-type').textContent
                dateInputElement.value = parent.querySelector('h3:first-of-type').textContent

                addWeatherButton.setAttribute('disabled', 'disabled')
                editWeatherButton.removeAttribute('disabled')

                currentWeatherId = weatherId
                parent.remove()
            })

            // Delete Button
            deleteButton.addEventListener('click', () => {
                currentWeatherId = weatherId

                fetch(`${baseUrl}/${currentWeatherId}`,{
                    method: 'DELETE'
                })

                loadWeatherFunc()
            })
        }
    
    })
}