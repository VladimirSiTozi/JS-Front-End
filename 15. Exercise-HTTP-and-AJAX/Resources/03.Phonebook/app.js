function attachEvents() {
    baseUrl = 'http://localhost:3030/jsonstore/phonebook'

    const phonebookUlElement = document.getElementById('phonebook')

    const loadButtonElement = document.getElementById('btnLoad')
    const createButtonElement = document.getElementById('btnCreate')

    const nameInputElement = document.getElementById('person')
    const phoneInputElement = document.getElementById('phone')


    loadButtonElement.addEventListener('click', () => {
        phonebookUlElement.innerHTML = ''

        fetch(baseUrl)
            .then(res => res.json())
            .then(contacts => {
                for (const contact of Object.values(contacts)) {
                    const contactlLiElement = document.createElement('li')
                    contactlLiElement.textContent = `${contact.person}: ${contact.phone}`

                    const deleteContactButtonElement = document.createElement('button')
                    deleteContactButtonElement.textContent = 'Delete'
                    deleteContactButtonElement.value = contact._id
                    deleteContactButtonElement.classList.add('button')
                    deleteContactButtonElement.classList.add('button:hover')
                    contactlLiElement.appendChild(deleteContactButtonElement)
                    
                    phonebookUlElement.appendChild(contactlLiElement)

                    deleteContactButtonElement.addEventListener('click', () => {
                        fetch (`${baseUrl}/${deleteContactButtonElement.value}`, {
                            method: 'DELETE', 
                        })
                            .then(() => {
                                contactlLiElement.remove()
                            })

                    })
                }
            })
    })

    createButtonElement.addEventListener('click', () => {

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                 'content-type': 'application/json'
            },
            body: JSON.stringify({
                "person": nameInputElement.value,
                "phone": phoneInputElement.value,
            })
        })
        .then(res => res.json())
        .catch();

        nameInputElement.value = ''
        phoneInputElement.value = ''
        phonebookUlElement.innerHTML = ''

        fetch(baseUrl)
            .then(res => res.json())
            .then(contacts => {
                for (const contact of Object.values(contacts)) {
                    const contactlLiElement = document.createElement('li')
                    contactlLiElement.textContent = `${contact.person}: ${contact.phone}`

                    const deleteContactButtonElement = document.createElement('button')
                    deleteContactButtonElement.textContent = 'Delete'
                    deleteContactButtonElement.value = contact._id
                    deleteContactButtonElement.classList.add('button')
                    deleteContactButtonElement.classList.add('button:hover')
                    contactlLiElement.appendChild(deleteContactButtonElement)
                    
                    phonebookUlElement.appendChild(contactlLiElement)

                    deleteContactButtonElement.addEventListener('click', () => {
                        fetch (`${baseUrl}/${deleteContactButtonElement.value}`, {
                            method: 'DELETE', 
                        })
                            .then(() => {
                                contactlLiElement.remove()
                            })
                        })
                }
            })
            
    })
    
}

attachEvents();