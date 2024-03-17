function solve(input) {
    let day = 0
    let bitcoins = 0
    let money = 0
    let firstDay = 0

    const BitcoinPrice = 11949.16
    const GoldPrice = 67.51

    for (let i = 0; i < input.length; i++) {
        let gramsOfGold = input[i];
        day += 1

        if (day % 3 === 0){
            gramsOfGold *= 0.7
        }

        let moneyFromGold = gramsOfGold * GoldPrice
        money += moneyFromGold

        if (money >= BitcoinPrice){
            let amountOfBitcoins = Math.trunc(money / BitcoinPrice)
            bitcoins += amountOfBitcoins
            money -= amountOfBitcoins * BitcoinPrice
            if (firstDay === 0){
                firstDay = day
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`)
    if (firstDay > 0){
        console.log(`Day of the first purchased bitcoin: ${firstDay}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}

solve([100, 200, 300])
console.log()
solve([50, 100])
console.log()
solve([3124.15, 504.212, 2511.124])