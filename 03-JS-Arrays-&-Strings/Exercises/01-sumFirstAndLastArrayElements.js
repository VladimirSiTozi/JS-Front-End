function solve(numbers) {
    let firstNumber = numbers.shift();
    let lastNumber = numbers.pop()

    let result = firstNumber + lastNumber
    console.log(result)
}

solve([20, 30, 40])
solve([10, 17, 22, 33])
solve([11, 58, 69])