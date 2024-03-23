function isPalindrome(number){
    const forwardNumber = number.toString();
    const backwardNumber = forwardNumber.split('').reverse().join('');

    return forwardNumber === backwardNumber
}

function solve(numbers) {
    numbers.forEach(number => console.log(isPalindrome(number)))

    // for (const numb of numbers) {
    //     console.log(isPalindrome(numb))
    // }
}

solve([123,323,421,121])
console.log()
solve([32,2,232,1010])