function solve(fruit, grams, pricePerKilo){
    let kg = grams / 1000
    let totalPrice = kg * pricePerKilo

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)