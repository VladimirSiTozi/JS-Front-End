function solve(input) {
    const words= {}

    const wordsToTrack = input.shift().split(' ')

    for (const word of wordsToTrack) {
        words[word] = 0
    }

    for (const word of input) {
        for (const wantedWord of Object.keys(words)) {
            if (word === wantedWord){
                words[wantedWord] += 1
            }
        }
    }
    
    const sortedWords = Object.entries(words)
        .sort((a, b) => b[1] - a[1])

    for (const [word, quntity] of sortedWords) {
        console.log(`${word} - ${quntity}`)
    }
}

solve([
'this sentence',
'In', 'this', 'sentence', 'you', 'have',
'to', 'count', 'the', 'occurrences', 'of',
'the', 'words', 'this', 'and', 'sentence',
'because', 'this', 'is', 'your', 'task'
])

console.log('=====')

solve([
'is the',
'first', 'sentence', 'Here', 'is',
'another', 'the', 'And', 'finally', 'the',
'the', 'sentence'
])