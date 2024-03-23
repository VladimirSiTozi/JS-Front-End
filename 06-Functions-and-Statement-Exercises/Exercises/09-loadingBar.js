function solve(number) {
    const redicedNumber = number / 10
    const loadingBar = createLoadingBar(redicedNumber)

    printResult(number, loadingBar)
}

function createLoadingBar(redicedNumber) {
    let loadingBar = []
        
        for (let i = 1; i < 11; i++) {
            const element = i;

            if (element <= redicedNumber) {
                loadingBar.push('%')
            } else {
                loadingBar.push('.')
            }
        }

    return loadingBar
    }

function printResult(number, loadingBar) {
    console.log(`${number}% [${loadingBar.join('')}]`)
    
    if (number < 100){
        console.log('Still loading...')
    } else {
        console.log('Complete!')
    }
}

solve(30)
console.log()
solve(50)
console.log()
solve(100)