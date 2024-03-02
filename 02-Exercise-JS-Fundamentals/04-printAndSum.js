function solve(num_a, num_b){
    let totalSum = 0
    let result = ''

    for (let i = num_a; i <= num_b; i++){
        result += i + ' '
        totalSum += i
    }

    console.log(result)
    console.log(`Sum: ${totalSum}`)
}

solve(5,10)
solve(0, 26)