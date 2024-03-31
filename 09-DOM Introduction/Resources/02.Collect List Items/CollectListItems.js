function extractText() {
    const elements = document.getElementById('items')
    const textAreaElement = document.getElementById('result')

    textAreaElement.value = elements.textContent
}