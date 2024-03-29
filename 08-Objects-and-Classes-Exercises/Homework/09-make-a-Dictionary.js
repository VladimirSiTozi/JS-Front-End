function solve(input) {
    const dictinary = {}

    const words = input.map(JSON.parse)

    for (const wordObj of words) {
        const word = Object.keys(wordObj)[0]

        dictinary[word] = wordObj[word]
    }
    
    Object.entries(dictinary)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([term, description]) => console.log(`Term: ${term} => Definition: ${description}`))
}

solve([
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variationswhich may then be amplified, transmitted, or recorded."}'
])