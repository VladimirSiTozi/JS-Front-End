function solve(word, text) {
    let wordsFromTextArray = text.split(' ')
    let found = false

    let wordSmallChars = word.toLowerCase()

    for (const words of wordsFromTextArray) {
        if (words.toLowerCase() === wordSmallChars){
            found = true
            break
        }
    }

    if (found){
        console.log(word)
    } else {
        console.log(`${word} not found!`)
    }

}

solve('javascript', 'JavaScript is the best programming language')
solve('python', 'JavaScript is the best programming language')