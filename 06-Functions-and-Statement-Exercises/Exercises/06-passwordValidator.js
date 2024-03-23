function solve(password) {
    if (isAllConditionsMatched(password) === true){
        console.log('Password is valid')
    }

    function isAllConditionsMatched(password){
        const firstResult = isLengthRight(password)
        const secondResult = isLetterAndDigitsOnly(password)
        const thirdResult = isAtLeastTwoDigits(password)
        if (firstResult === true && secondResult === true && thirdResult === true){
            return true
        } 
    }

    function isLengthRight(password) {
        if (password.length >= 6 && password.length <= 10){
            return true
        } else {
            console.log("Password must be between 6 and 10 characters")
        }
    }
    
    function isLetterAndDigitsOnly(password) {
        const pattern = /^[A-Za-z0-9]+$/;
        const match = password.match(pattern)
    
        if (match === null ){
            console.log("Password must consist only of letters and digits")
        } else {
            return true
        }
    }
    
    function isAtLeastTwoDigits(password) {
        const pattern = /^(?=.*\d.*\d).+/;
        const match = password.match(pattern)
    
        if (match === null){
            console.log("Password must have at least 2 digits")
        } else {
            return true
        }
    }

}

solve('logIn')
console.log()
solve('MyPass123')
console.log()
solve('Pa$s$s')
