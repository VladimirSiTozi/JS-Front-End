function solve(number, power) {
    const base = number
    let result = number

    for (let i = 1; i < power; i++) {
        result = powerNumber(result, base)
    }

    console.log(result)

    function powerNumber(result, base) {
        return result * base
    }
}

solve(2,8)
solve(3,4)