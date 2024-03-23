function calculateDigits(number, filter) {
    // get digit array
    const digits = number
        .toString()
        .split('')
        .map(Number)
        .filter(filter);

    // calculate sum
    const sum = digits.reduce((acc, digit) => acc + digit, 0);

    return sum;
}

function solve(number) {
    const evenSum = calculateDigits(number, (x => x % 2 === 0))
    const oddSum = calculateDigits(number, (x => x % 2 !== 0))
 
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)    
}

solve(1000435)
solve(3495892137259234)