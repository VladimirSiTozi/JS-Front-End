window.addEventListener("load", solve);

function solve(){
    const placeInputElement = document.getElementById('place')
    const actionInputElement = document.getElementById('action')
    const personInputElement = document.getElementById('person')
    const ulTaskList = document.getElementById('task-list')

    const addButtonElement = document.getElementById('add-btn')

    addButtonElement.addEventListener('click', () => {
        addTaskFunc()

    })

    function addTaskFunc() {
        const placePElement = document.createElement('p')
        placePElement.textContent = `Place:${placeInputElement.value}`
        const actionPElement = document.createElement('p')
        actionPElement.textContent = `Action:${actionInputElement.value}`
        const personPElement = document.createElement('p')
        personPElement.textContent = `Person:${personInputElement.value}`

        const articleElement = document.createElement('article')
        articleElement.appendChild(placePElement)
        articleElement.appendChild(actionPElement)
        articleElement.appendChild(personPElement)

        const divElement = document.createElement('div')
        divElement.classList.add('buttons')
        const editButton = document.createElement('button')
        editButton.textContent = 'Edit'
        editButton.classList.add('edit')
        const doneButton = document.createElement('button')
        doneButton.textContent = 'Done'
        doneButton.classList.add('done')
        divElement.appendChild(editButton)
        divElement.appendChild(doneButton)

        const liElement = document.createElement('li')
        liElement.classList.add('clean-task')
        liElement.appendChild(articleElement)
        liElement.appendChild(divElement)

        ulTaskList.appendChild(liElement)

        placeInputElement.value = ''
        actionInputElement.value = ''
        personInputElement.value = ''

        //edit 
        editButton.addEventListener('click', () => {
            const liElement = document.querySelector('ul#task-list li:first-of-type')
            const placePElement = document.querySelector('li.clean-task article p:first-of-type')
            const actionPElement = document.querySelector('li.clean-task article p:nth-of-type(2)')
            const personPElement = document.querySelector('li.clean-task article p:last-of-type')

            placeInputElement.value = placePElement.textContent.replace("Place:", "")
            actionInputElement.value = actionPElement.textContent.replace("Action:", "")
            personInputElement.value = personPElement.textContent.replace("Person:", "")
            
            liElement.remove()
        })

        //done button
        doneButton.addEventListener('click', (e) => {

            divElement.remove()
            
            const ulElement = document.getElementById('done-list')

            const articleElement = document.querySelector('li.clean-task article')

            const deleteButton = document.createElement('button')
            deleteButton.classList.add('delete')
            deleteButton.textContent = 'Delete'

            const liElement = document.createElement('li')
            liElement.appendChild(articleElement)
            liElement.appendChild(deleteButton)

            ulElement.appendChild(liElement)

            deleteButton.addEventListener('click', () => {
                ulElement.remove()
            })
        })
    }     
}