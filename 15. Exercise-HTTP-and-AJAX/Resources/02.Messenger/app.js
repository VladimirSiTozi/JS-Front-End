function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger'

    const textareaElement = document.getElementById('messages')

    const nameInputElement = document.querySelector('input[name="author"]')
    const messageInputElement = document.querySelector('input[name="content"]')
    
    const sendButtonElement = document.getElementById('submit')
    const refreshButtonElement = document.getElementById('refresh')
    
    sendButtonElement.addEventListener('click', () => {

        fetch (baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                'author': nameInputElement.value,
                'content': messageInputElement.value,
            })
        })
        .then(res => res.json())
    })

    refreshButtonElement.addEventListener('click', () => {
        fetch (baseUrl)
            .then(res => res.json())
            .then(data => {
                let updatedContent = ''
                for (const record of Object.values(data)) {
                    updatedContent += `${record.author}: ${record.content}\n`
                }
            
            textareaElement.textContent = updatedContent.trimEnd()

            console.log(textareaElement.textContent)
            })
    })
}

attachEvents();