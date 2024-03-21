function solve(n, numbers){
    let new_arr = []

    for (let i = 0; i <= n - 1; i++){
        let firstElement = numbers.shift()
        new_arr.push(firstElement)
    }

    let reverse_arr = new_arr.reverse()

    console.log(reverse_arr.join(' '))

}

solve(3, [10, 20, 30, 40, 50])
solve(4, [-1, 20, 99, 5])
solve(2, [66, 43, 75, 89, 47])