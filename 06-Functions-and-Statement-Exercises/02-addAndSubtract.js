function solve(a, b, c) {
    const addFunc = (a, b) => a + b;
    //     function addFunc(a, b) {
    //         return a + b
    //     }
    
    const substractFunc = (a, b) => a - b;
    //     function substractFunc(a, b) {
    //         return a - b
    //     }

    const result = substractFunc(addFunc(a, b), c)

    console.log(result)
}

solve(23, 6, 10)
solve(1, 17, 30)
solve(42, 58, 100)

