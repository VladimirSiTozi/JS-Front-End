function getDividors(number) {
    const divisors = []

    for (let i = number - 1; i >= 0; i--) {
        if (number % i === 0) {
            divisors.push(i)
        }
    }
    
    return(divisors)
}

function solve(number) {
    // all divisors excluding itself
    const divisors = getDividors(number)

    // find the sum
    const sumDivisors = divisors.reduce((a, b) => a + b, 0)

    // check and print
    if (sumDivisors === number) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
}

solve(6)
solve(28)
solve(1236498)