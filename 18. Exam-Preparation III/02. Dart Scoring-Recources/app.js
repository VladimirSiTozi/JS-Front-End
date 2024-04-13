window.addEventListener("load", solve);

function solve() {
  // Input Elements
  const playerInputElement = document.getElementById('player')
  const scoreInputElement = document.getElementById('score')
  const roundInputElement = document.getElementById('round')

  // Elements
  const conformationUlElement = document.getElementById('sure-list')
  const historyUlElement = document.getElementById('scoreboard-list')
  
  // Buttons
  const addButtonElement = document.getElementById('add-btn')
  const clearButton = document.querySelector('.btn.clear')

  // Event Listener
  addButtonElement.addEventListener('click', () => {
    if (playerInputElement.value && scoreInputElement.value && roundInputElement.value){
      const namePElement = document.createElement('p')
      namePElement.textContent = `${playerInputElement.value}`
      const scorePElement = document.createElement('p')
      scorePElement.textContent = `Score: ${scoreInputElement.value}`
      const roundPElement = document.createElement('p')
      roundPElement.textContent = `Round: ${roundInputElement.value}`

      const articleElement = document.createElement('article')
      articleElement.appendChild(namePElement)
      articleElement.appendChild(scorePElement)
      articleElement.appendChild(roundPElement)

      const editButton = document.createElement('button')
      editButton.classList.add('btn', 'edit')
      editButton.textContent = 'edit'
      const okButton = document.createElement('button')
      okButton.classList.add('btn', 'ok')
      okButton.textContent = 'ok'

      const dartsLiElement = document.createElement('li')
      dartsLiElement.classList.add('dart-item')
      dartsLiElement.appendChild(articleElement)
      dartsLiElement.appendChild(editButton)
      dartsLiElement.appendChild(okButton)

      conformationUlElement.appendChild(dartsLiElement)

      addButtonElement.setAttribute('disabled', 'true')

      playerInputElement.value = ''
      scoreInputElement.value = ''
      roundInputElement.value = ''

      editButton.addEventListener('click', () => {
        playerInputElement.value = namePElement.textContent
        scoreInputElement.value = scorePElement.textContent.replace('Score: ', '')
        roundInputElement.value = roundPElement.textContent.replace('Round: ', '')

        dartsLiElement.remove()
        addButtonElement.removeAttribute('disabled')
      })

      okButton.addEventListener('click', () => {
        const shotArictleElement = document.querySelector('li.dart-item article')

        const shotLiElement = document.createElement('li')
        shotLiElement.classList.add('dart-item')
        shotLiElement.appendChild(shotArictleElement)

        historyUlElement.appendChild(shotLiElement)
        dartsLiElement.remove()

        addButtonElement.removeAttribute('disabled')
      })
    }
  })
  
  clearButton.addEventListener('click', () => {
    location.reload();
  })
}