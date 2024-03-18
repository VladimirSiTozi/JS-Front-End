function solve(text, number) {
    let result = ''

    for (let i = 0; i < number; i++) {
        result = addText(result, text)
    }
    console.log(result)

    function addText(result, text) {
        return result + text
    }
}

solve("abc", 3)
solve("String", 2)