function solve(input) {
    let username = input[0]
    let count = 4

    for (let i = 1; i < input.length; i++) {
        const password =  [...input[i]].reverse().join(""); 
        
        if (username === password){
            console.log(`User ${username} logged in.`)
            break
        } else {
            count -= 1
            if (count === 0){
                console.log(`User ${username} blocked!`)
                break
            } else {
                console.log('Incorrect password. Try again.')
            }
        }
    }
}

solve(['Acer','login','go','let me in','recA'])
console.log()
solve(['momo','omom'])
console.log()
solve(['sunny','rainy','cloudy','sunny','not sunny'])