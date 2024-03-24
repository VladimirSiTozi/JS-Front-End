function solve(jsonData) {
    const objectData = JSON.parse(jsonData)

    Object
        .keys(objectData)
        .forEach(propName => console.log(`${propName}: ${objectData[propName]}`))
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')