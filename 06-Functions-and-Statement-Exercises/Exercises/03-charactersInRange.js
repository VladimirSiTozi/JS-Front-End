function solve(firstCharacter, secondCharacter) {
    // Find starting character
    const sortCharacters = getSortCharacters(firstCharacter, secondCharacter)

    // Print characters between
    console.log(getCharactersBetween(...sortCharacters))
    
}

function getSortCharacters(a, b) {
    return [a, b].sort()
}

function getCharactersBetween(start, end){
    let result = []

    for (let i = start.charCodeAt(0) + 1; i < end.charCodeAt(0); i++) {
        result.push(String.fromCharCode(i));
    }

    return result.join(' ')
}

solve('C','#')
solve('#', ':')
solve('a', 'd')