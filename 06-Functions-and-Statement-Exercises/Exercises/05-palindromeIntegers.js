function solve(arrayOfNumbers) {
    for (const number of arrayOfNumbers) {
        if (number == turnNumberBackward(number)) {
            console.log('true')
        } else {
            console.log('false')
        }
    }

    function turnNumberBackward(number) {
        let string = String(number)
    
        return string
            .split("")
            .reverse()
            .join("")
    }
}

solve([123,323,421,121])
console.log()
solve([32,2,232,1010])