function solve(stock, delivery) {
    const store = {}

    for (let i = 0; i < stock.length; i+=2) {
        const product = stock[i]
        const quntity = stock[i + 1]
        store[product] = Number(quntity)
    }

    for (let i = 0; i < delivery.length; i+=2) {
        const product = delivery[i]
        const quntity = delivery[i + 1]
        
        if (!store[product]){
            store[product] = 0
        }

        store[product] += Number(quntity)
    }


    for (const product in store) {
        console.log(`${product} -> ${store[product]}`)
    }
}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30'])
console.log('====')
solve(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ])
