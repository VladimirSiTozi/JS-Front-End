function deleteByEmail() {
    const inputElement = document.getElementsByName('email')[0]
    const trElements = document.querySelectorAll('#customers tbody tr')
    const resultElement = document.getElementById('result')
    
    for (const user of trElements) {
        const email = user.querySelector('td:last-of-type')

        if (email.textContent === inputElement.value){
            user.remove()
            resultElement.textContent = "Deleted."
            break
        } else {
            resultElement.textContent = "Not found."
        }
    }
    inputElement.value = ''
}