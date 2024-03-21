function solve(names) {
    let newAlphabeticOrder = names.sort((a, b) => a.localeCompare(b))
    
    for (let i = 0; i < newAlphabeticOrder.length; i++) {
        const element = newAlphabeticOrder[i];

        console.log(`${i + 1}.${element}`)
    }

    console.log('----------------------')

    // names
    //     .sort((a,b) => a.localeCompare(b))
    //     .forEach((name, index) => {
    //         console.log(`${index + 1}.${name}`)
    // });

    // console.log('----------------------')
}

solve(["John", "Bob", "Christina", "Ema"])
solve(["John", "bob", "Christina", "Ema"])