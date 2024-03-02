function solve(number){
    let result;
    let inputType = typeof(number)

    if (inputType === 'number'){
        result = Math.pow(number, 2) * Math.PI
        console.log(result.toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
}

solve(5)
solve('name')