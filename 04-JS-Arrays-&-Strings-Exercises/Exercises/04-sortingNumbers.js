function solve(numbers) {
    let sortedNumbers = numbers.sort((a, b) => a - b)
    let resultArray = []
    while (sortedNumbers.length > 0){
        let firstNumber = sortedNumbers.shift();
        let lastNumber = sortedNumbers.pop();

        resultArray.push(firstNumber)

        if (lastNumber){
            resultArray.push(lastNumber)
        }
    }

    return resultArray
}


console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 99]))