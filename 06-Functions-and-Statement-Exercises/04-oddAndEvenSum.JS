function solve(number) {
    let numbers = String(number)
    let even = 0
    let odd = 0

    const evenFunc = (a, b) => a + Number(b);
    const oddFunc = (a, b) => a + Number(b);

    for (const num of numbers) {
        if (num % 2 == 0) {
            even = evenFunc(even, num)
        } else {
            odd = oddFunc(odd, num)
        }
    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`)
    
}

solve(1000435)
solve(3495892137259234)