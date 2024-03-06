function solve(numbers){
    let even = 0
    let odd = 0

    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element % 2 == 0){
            even += element
        } else {
            odd += element
        }
    }
    let diference = even - odd
    
    console.log(diference)
}

solve([1,2,3,4,5,6])
solve([3,5,7,9])
solve([2,4,6,8,10])