function toggle() {
    const textElement = document.getElementById('extra')
    const buttonElement = document.querySelector('.head span.button');

    const currentButtonState = buttonElement.textContent
    if (currentButtonState === 'More') {
        textElement.style.display = 'block'
        buttonElement.textContent = 'Less'
    } else {
        textElement.style.display = 'none'
        buttonElement.textContent = 'More'
    }
}