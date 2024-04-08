function attachEvents() {
    const titleElement = document.querySelector('input[type=text][name=title]')
    const authorElement = document.querySelector('input[type=text][name=author]')
    const submitButtonElement = document.querySelector('#form button')
    const bookTbodyElement = document.querySelector('#books tbody')


    submitButtonElement.addEventListener('click', (e) => {
        const bookTrElement = createBookElement(titleElement.value, authorElement.value)

        bookTbodyElement.appendChild(bookTbodyElement)

        titleElement.value = ''
        authorElement.value = ''
    })
}

function createBookElement(title, author) {
    const editButtonElement = document.createElement('button')
    editButtonElement.textContent = 'Edit'
    const deleteButtonElement = document.createElement('button')
    deleteButtonElement.textContent = 'Delete'

    const buttonsTdElements = document.createElement('td')
    buttonsTdElements.appendChild(editButtonElement)
    buttonsTdElements.append(deleteButtonElement)

    const titleElement = document.createElement('td')
    titleElement.textContent = title
    const authorElement = document.createElement('td')
    authorElement.textContent = author

    const bookTrElement = document.createElement('tr')
    bookTrElement.appendChild(titleElement)
    bookTrElement.appendChild(author)
    bookTrElement.appendChild(buttonsTdElements)

    return bookTrElement

}


attachEvents();
