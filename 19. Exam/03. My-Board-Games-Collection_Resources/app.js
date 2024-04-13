const baseUrl = 'http://localhost:3030/jsonstore/games'
let curretGameId 

// Elements
const nameInputElement = document.getElementById('g-name')
const typeInputElement = document.getElementById('type')
const playersInputElement = document.getElementById('players')

const gamesListDivElement = document.getElementById('games-list')

// Buttons
const loadGamesButton = document.getElementById('load-games')
const addGameButton = document.getElementById('add-game')
const editGameButton = document.getElementById('edit-game')


// Events
loadGamesButton.addEventListener('click', () => {
    loadGamesFunc()
})

addGameButton.addEventListener('click', () => {
    if (nameInputElement.value && typeInputElement.value && playersInputElement.value ) {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "name": nameInputElement.value,
                "type": typeInputElement.value,
                "players": playersInputElement.value,
            })
        })
        .then(res => {if (!res.ok) {
            return;}})
        
        nameInputElement.value = ''
        typeInputElement.value = ''
        playersInputElement.value = ''

        loadGamesFunc()
    }
})

editGameButton.addEventListener('click', () => {
    fetch(`${baseUrl}/${curretGameId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "name": nameInputElement.value,
            "type": typeInputElement.value,
            "players": playersInputElement.value,
            "_id": curretGameId
        })
    })

    nameInputElement.value = ''
    typeInputElement.value = ''
    playersInputElement.value = ''

    editGameButton.setAttribute('disabled', 'disabled')
    addGameButton.removeAttribute('disabled')

    loadGamesFunc()
})


function loadGamesFunc(){
    gamesListDivElement.innerHTML = ''

    fetch(baseUrl)
    .then(res => res.json())
    .then(games => {
        for (const game of Object.values(games)) {
            const namePElement = document.createElement('p')
            namePElement.textContent = game.name
            const typlePElement = document.createElement('p')
            typlePElement.textContent = game.type
            const playersPElement = document.createElement('p')
            playersPElement.textContent = game.players
            
            const contentDivElement = document.createElement('div')
            contentDivElement.classList.add('content')
            contentDivElement.appendChild(namePElement)
            contentDivElement.appendChild(typlePElement)
            contentDivElement.appendChild(playersPElement)

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

            const boardGameDivElement = document.createElement('div')
            boardGameDivElement.classList.add('board-game')
            boardGameDivElement.appendChild(contentDivElement)
            boardGameDivElement.appendChild(buttonsDivElement)

            gamesListDivElement.appendChild(boardGameDivElement)

            // Change
            changeButton.addEventListener('click', () => {
                const parentElement = changeButton.closest("div.board-game")
                nameInputElement.value = parentElement.querySelector('div.content p:first-of-type').textContent
                typeInputElement.value = parentElement.querySelector('div.content p:nth-of-type(2)').textContent
                playersInputElement.value = parentElement.querySelector('div.content p:last-of-type').textContent

                addGameButton.setAttribute('disabled', 'disabled')
                editGameButton.removeAttribute('disabled')
                
                curretGameId = game._id
                boardGameDivElement.remove()
            })
            
            // Delete
            deleteButton.addEventListener('click', () => {
                curretGameId = game._id

                fetch(`${baseUrl}/${curretGameId}`,{
                    method: 'DELETE'
                })
                loadGamesFunc()
            })
        }
    })
}