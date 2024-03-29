function solve(input) {
    const occurrences = {}
    const allElements = input.split(' ')

    for (const element of allElements) {
        const currentElement = element.toLowerCase()

        if (!occurrences[currentElement]){
            occurrences[currentElement] = 0
        }
        occurrences[currentElement] += 1
    }

    const oddOccurrences = []

    for (const element in occurrences) {
       if (occurrences[element] % 2 != 0){
        oddOccurrences.push(element)
       }
    }
    
    console.log(oddOccurrences.join(' '))
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')

solve('Cake IS SWEET is Soft CAKE sweet Food')