function addItem() {
    const inputElement = document.getElementById('newItemText')
    const ulElement = document.getElementById('items')

    // using create
    const newElement = document.createElement('li')

    // assign textContent
    newElement.textContent = inputElement.value

    // append to perent
    ulElement.appendChild(newElement)

    //cleare input element 
    inputElement.value = ''
}