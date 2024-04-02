function subtract() {
    const firstInputElement = document.getElementById('firstNumber')
    const secondInputElement = document.getElementById('secondNumber')
    const resultElement = document.getElementById('result')

    const firstElement = Number(firstInputElement.value)
    const secondElement = Number(secondInputElement.value)

    resultElement.textContent = firstElement - secondElement
}