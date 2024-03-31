function solve(element, match, replacer) {
    // This doesn't work in judje
    element.textContent = element.textContent.replaceAll(match, replacer)

    while(element.textContent.includes(match)) {
        element.textContent = element.textContent.replace(match, replacer)
    }
}