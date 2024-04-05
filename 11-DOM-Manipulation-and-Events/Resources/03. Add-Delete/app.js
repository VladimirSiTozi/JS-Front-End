function addItem() {
    const inputElement = document.getElementById('newItemText')
    const ulElement = document.getElementById('items')

    // create new intem
    const newElement = document.createElement('li')
    newElement.textContent = inputElement.value

    // create link element
    const deleteLinkElement = document.createElement('a')
    deleteLinkElement.textContent = '[Delete]'
    deleteLinkElement.href = '#'

    // add event to link element
    deleteLinkElement.addEventListener('click', () => {
        newElement.remove()
    })

    //Append link element to the newElement
    newElement.appendChild(deleteLinkElement)

    // append to parent
    ulElement.appendChild(newElement)

    // clear input
    inputElement.value = ''
}

