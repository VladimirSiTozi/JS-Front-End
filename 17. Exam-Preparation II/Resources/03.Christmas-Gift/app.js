const baseUrl = 'http://localhost:3030/jsonstore/gifts'
let currentGiftId 

// Main Buttons
const loadGiftsButton = document.getElementById('load-presents')
const addGiftButton = document.getElementById('add-present')
const editGiftButton = document.getElementById('edit-present')

// Gift Buttons
const changeButton = document.getElementById('change-btn')
const deleteButton = document.getElementById('delete-btn')

// Elements
const presentDivListElement = document.getElementById('gift-list')

//Input Elements
const presentInputElement = document.getElementById('gift')
const forInputElement = document.getElementById('for')
const priceInputElement = document.getElementById('price')

// Event Listeners
loadGiftsButton.addEventListener('click', () => {
    loadGiftsFunc()
})

addGiftButton.addEventListener('click', () => {
    addGiftFund()
})

editGiftButton.addEventListener('click', () => {
    fetch(`${baseUrl}/${currentGiftId}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            'gift': presentInputElement.value,
            'for': forInputElement.value,
            'price': priceInputElement.value,
            "_id": currentGiftId
        })
    })
    addGiftButton.removeAttribute('disabled')
    editGiftButton.setAttribute("disabled", 'disabled')

    loadGiftsFunc()
})



// functions
function loadGiftsFunc(){
    presentDivListElement.innerHTML = ''

    fetch(baseUrl)  
    .then(res => res.json())
    .then(elements => {
        for (const element of Object.values(elements)) {
            const gift = document.createElement('p')
            gift.textContent = element.gift
            const forName = document.createElement('p')
            forName.textContent = element.for
            const price = document.createElement('p')
            price.textContent = element.price
            // id*
            const giftId = element._id
            currentGiftId = giftId 

            const contentDivElement = document.createElement('div')
            contentDivElement.classList.add('content')
            contentDivElement.appendChild(gift)
            contentDivElement.appendChild(forName)
            contentDivElement.appendChild(price)
            
            const buttonsDivElement = document.createElement('div')
            buttonsDivElement.classList.add('buttons-container')
            const changeButtonElement = document.createElement('button')
            changeButtonElement.classList.add('change-btn')
            changeButtonElement.textContent = 'Change'
            const deleteButtonElement = document.createElement('button')
            deleteButtonElement.classList.add('delete-btn')
            deleteButtonElement.textContent = 'Delete'
            buttonsDivElement.appendChild(changeButtonElement)
            buttonsDivElement.appendChild(deleteButtonElement)

            const giftSockDivElement = document.createElement('div')
            giftSockDivElement.classList.add('gift-sock')
            giftSockDivElement.appendChild(contentDivElement)
            giftSockDivElement.appendChild(buttonsDivElement)

            presentDivListElement.appendChild(giftSockDivElement)

            currentGiftId = giftId 
            changeButtonElement.addEventListener('click', () => {
                const parentEl = changeButtonElement.parentElement.parentElement
                presentInputElement.value = parentEl.querySelector('p:first-of-type').textContent
                forInputElement.value = parentEl.querySelector('p:nth-of-type(2)').textContent
                priceInputElement.value = parentEl.querySelector('p:last-of-type').textContent

                addGiftButton.setAttribute("disabled", 'disabled')
                editGiftButton.removeAttribute('disabled')

                currentGiftId = giftId 
                parentEl.remove()
            })

            deleteButtonElement.addEventListener('click', () => {
                currentGiftId = giftId 

                console.log(currentGiftId)
                fetch(`${baseUrl}/${currentGiftId}`,{
                    method: 'DELETE'
                })
            
                loadGiftsFunc()
            })
        }
    })
    
} 

function addGiftFund(){

    if (presentInputElement.value){
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                'gift': presentInputElement.value,
                'for': forInputElement.value,
                'price': priceInputElement.value,
            })
        })
            .then(res => {if (!res.ok) {
                return;}})
        
        presentInputElement.value = ''
        forInputElement.value = ''
        priceInputElement.value = ''
        
        loadGiftsFunc()
    }
    
}
    
