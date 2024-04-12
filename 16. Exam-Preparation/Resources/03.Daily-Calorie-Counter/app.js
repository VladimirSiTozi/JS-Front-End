const baseUrl = 'http://localhost:3030/jsonstore/tasks'

const foodInputElement = document.getElementById('food')
const timeInputElement = document.getElementById('time')
const caloriesInputElement = document.getElementById('calories')

const loadMealsButton = document.getElementById('load-meals')
const addMealButton = document.getElementById('add-meal')
const editMealButton = document.getElementById('edit-meal')
const changeMealButton = document.getElementsByClassName('change-meal')

let currentMealId = null

const todayLiElement = document.getElementById('list')

loadMealsButton.addEventListener('click', () => {
    loadFunc()
})

addMealButton.addEventListener('click', () => {
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "food": foodInputElement.value,
            "calories": caloriesInputElement.value,
            "time": timeInputElement.value,
        })    
    })
        .then(res => res.json())

    foodInputElement.value = ''
    timeInputElement.value = ''
    caloriesInputElement.value = ''

    loadFunc()
})

editMealButton.addEventListener('click', () => {
    fetch(`${baseUrl}/${currentMealId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "_id": currentMealId,
            "food": foodInputElement.value,
            "calories": caloriesInputElement.value,
            "time": timeInputElement.value,
        })
    })

    addMealButton.removeAttribute('disabled')
    
    editMealButton.setAttribute('disabled', 'disabled')
    
    foodInputElement.value = ''
    timeInputElement.value = ''
    caloriesInputElement.value = ''
    
    loadFunc()
})


function loadFunc() {
    todayLiElement.innerHTML = ''

    fetch(baseUrl)
        .then(res => res.json())
        .then(meals => {
            for (const meal of Object.values(meals)) {
                const mealH2Element = document.createElement('h2')
                mealH2Element.textContent = meal.food
                const timeH3Element = document.createElement('h3')
                timeH3Element.textContent = meal.time
                const calH3Element = document.createElement('h3')
                calH3Element.textContent = meal.calories

                const innerDivElement = document.createElement('div')
                innerDivElement.classList.add('meal-buttons')
                const changeButton = document.createElement('button')
                changeButton.classList.add('change-meal')
                changeButton.textContent = 'Change'
                const deleteButton = document.createElement('button')
                deleteButton.classList.add('delete-meal')
                deleteButton.textContent = 'Delete'
                innerDivElement.appendChild(changeButton)
                innerDivElement.appendChild(deleteButton)

                const outerDivElement = document.createElement('div')
                outerDivElement.classList.add('meal')
                outerDivElement.appendChild(mealH2Element)
                outerDivElement.appendChild(timeH3Element)
                outerDivElement.appendChild(calH3Element)
                outerDivElement.appendChild(innerDivElement) 

                todayLiElement.appendChild(outerDivElement)

                // attach to change
                changeButton.addEventListener('click', () => {
                    currentMealId = meal._id

                    foodInputElement.value = mealH2Element.textContent
                    timeInputElement.value = timeH3Element.textContent
                    caloriesInputElement.value = calH3Element.textContent

                    outerDivElement.remove()

                    addMealButton.setAttribute('disabled', 'disabled')

                    editMealButton.removeAttribute('disabled')

                })

                // attach to delete
                deleteButton.addEventListener('click', async () => {
                    const response = await fetch(`${baseUrl}/${meal._id}`, {
                        method: 'DELETE'
                    })

                    outerDivElement.remove()
                })
            }
        })
    }