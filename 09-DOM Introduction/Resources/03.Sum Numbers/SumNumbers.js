function calc() {
    const firstNumberInput = document.getElementById('num1')
    const secondNumberInput = document.getElementById('num2')
    const sumElementInput = document.getElementById('sum')

    const numA = Number(firstNumberInput.value)
    const numB = Number(secondNumberInput.value)

    sumElementInput.value = numA + numB;
}
