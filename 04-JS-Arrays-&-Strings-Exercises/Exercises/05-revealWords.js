function solve(words, template) {
    let wordsArray = words.split(', ')

    let mathes = template.matchAll(/\*+/g);

    for (const match of mathes) {
        const word = wordsArray.find(w => w.length === match[0].length)
        template = template.replace(match[0], word)
    }

    console.log(template)
}


solve('great', 'softuni is ***** place for learning new programming languages')
solve('great, learning', 'softuni is ***** place for ******** new programming languages')