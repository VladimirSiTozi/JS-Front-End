function solve(pascalText) {
    const pattern = /([A-Z][a-z]*)/g;

    let matches = pascalText.matchAll(pattern)

    let matchesArray = []
    for (const match of matches) {
        matchesArray.push(match[1])
    }

    console.log(matchesArray.join(', '))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('HoldTheDoor')
solve('ThisIsSoAnnoyingToDo')