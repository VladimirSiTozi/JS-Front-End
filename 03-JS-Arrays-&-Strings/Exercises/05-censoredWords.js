function solve(text, forbiddenWord) {
    let index = text.indexOf(forbiddenWord)

    while (index >= 0){
        text = text.replace(forbiddenWord, '*'.repeat(forbiddenWord.length));

        index = text.indexOf(forbiddenWord)
    }

    console.log(text)
}

solve('A small sentence with some words small', 'small')