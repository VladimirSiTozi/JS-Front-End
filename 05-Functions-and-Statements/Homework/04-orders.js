function solve(product, amount) {
    let totalPrice = 0

    for (let i = 0; i < amount; i++) {
        totalPrice += searchForProduct(product)
    }

    console.log(totalPrice.toFixed(2))

    function searchForProduct(product) {
        if (product === 'coffee') {
            return 1.50
        } else if (product === 'water') {
            return 1.00
        } else if (product === 'coke') {
            return 1.40
        } else if (product === 'snacks') {
            return 2.00
        }
    }
}

solve("water", 5)
solve("coffee", 2)