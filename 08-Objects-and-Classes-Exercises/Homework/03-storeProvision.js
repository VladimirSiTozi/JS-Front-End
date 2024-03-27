function solve(inStock, orderedStock) {
    const storeProvision = {}

    for (let i = 0; i < inStock.length; i+=2) {
        const product = inStock[i]
        const quntity = inStock[i + 1]
        storeProvision[product] = Number(quntity)
    }

    for (let i = 0; i < orderedStock.length; i+=2) {
        const product = orderedStock[i]
        const quntity = orderedStock[i + 1]
        
        if (!storeProvision[product]){
            storeProvision[product] = 0
        }

        storeProvision[product] += Number(quntity)
    }


    for (const product in storeProvision) {
        console.log(`${product} -> ${storeProvision[product]}`)
    }
}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30'])
console.log('====')
solve(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ])
