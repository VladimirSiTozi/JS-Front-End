function solve(townInput) {
    let townsInfo = []

    for (const row of townInput) {
        const [townName, latitude, longitude] = row.split(' | ')

        const town = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        }
        townsInfo.push(town)
    }
    townsInfo.forEach(city => console.log(city));
}

function fancySolve(townInput) {
    townInput
        .map(row => row.split(' | '))
        .map(([townName, townLatitude, townLongitude]) => ({
            town: townName,
            latitude: Number(townLatitude).toFixed(2),
            longitude: Number(townLongitude).toFixed(2),
        }))
        .forEach(town => console.log(town))
    
}

solve(['Sofia | 42.696552 | 23.32601', 
'Beijing | 39.913818 | 116.363625'])

console.log('=======')
fancySolve(['Sofia | 42.696552 | 23.32601', 
'Beijing | 39.913818 | 116.363625'])