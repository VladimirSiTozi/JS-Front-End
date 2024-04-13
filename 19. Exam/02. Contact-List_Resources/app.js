window.addEventListener("load", solve);

function solve() {
  //Elements = 
  const nameInputElement = document.getElementById('name')
  const phoneInputElement = document.getElementById('phone')
  const categoryInputElement = document.getElementById('category')

  const checkListUlElement = document.querySelector('ul#check-list')
  const contactListUlElement = document.querySelector('ul#contact-list')

    //Buttons
  const addButton = document.getElementById(`add-btn`)

  // Events

  addButton.addEventListener('click', () => {
    const namePElement = document.createElement('p')
    namePElement.textContent = `name:${nameInputElement.value}`
    const phonePElement = document.createElement('p')
    phonePElement.textContent = `phone:${phoneInputElement.value}`
    const categoryPElement = document.createElement('p')
    categoryPElement.textContent = `category:${categoryInputElement.value}`
      
    const articleElement = document.createElement('article')
    articleElement.appendChild(namePElement)
    articleElement.appendChild(phonePElement)
    articleElement.appendChild(categoryPElement)

    const editButton = document.createElement('button')
    editButton.classList.add('edit-btn')

    const saveButton = document.createElement('button')
    saveButton.classList.add('save-btn')

    const divElement = document.createElement('div')
    divElement.classList.add('buttons')
    divElement.appendChild(editButton)
    divElement.appendChild(saveButton)

    const liElement = document.createElement('li')
    liElement.appendChild(articleElement)
    liElement.appendChild(divElement)

    checkListUlElement.appendChild(liElement)

    nameInputElement.value = ''
    phoneInputElement.value = ''
    categoryInputElement.value = ''
    

    // Edit
    editButton.addEventListener('click', () => {
      nameInputElement.value = namePElement.textContent.replace('name:', '')
      phoneInputElement.value = phonePElement.textContent.replace('phone:', '')
      categoryInputElement.value = categoryPElement.textContent.replace('category:', '')

      liElement.remove()

    })

    saveButton.addEventListener('click', () => {
      const deleteButton = document.createElement('button')
      deleteButton.classList.add('del-btn')

      const newLiElement = document.createElement('li')
      newLiElement.appendChild(articleElement)
      newLiElement.appendChild(deleteButton)

      contactListUlElement.appendChild(newLiElement)
      liElement.remove()

      // Delete 
      deleteButton.addEventListener('click', () => {
        newLiElement.remove()
      })
    })
  })
}
  