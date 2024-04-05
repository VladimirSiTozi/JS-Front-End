function attachGradientEvents() {
    const gradienElement = document.getElementById('gradient')
    const resultElement = document.getElementById('result')

    gradienElement.addEventListener('mousemove', (event) => {
        const currentWidth = event.offsetX
        const elementWidth = event.target.clientWidth

        const result = Math.floor((currentWidth / elementWidth) * 100)

        resultElement.textContent = `${result}%`
    });
}