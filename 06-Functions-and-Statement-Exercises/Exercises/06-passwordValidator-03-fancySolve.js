function solve(password){
    const isValidLength = password => password.length >= 6 && password.length <=10;
    const isAlphaNumerical = password => /^[A-Za-z0-9]+$/.test(password)
    const isStrong = password => password
        .split('')
        .filter(character => Number.isInteger(Number(character)))
        .length >= 2;

    fancySolve(password)

    function fancySolve(password) {
        const validations = [
            [isValidLength, "Password must be between 6 and 10 characters"],
            [isAlphaNumerical, "Password must consist only of letters and digits"],
            [isStrong, "Password must have at least 2 digits"]
        ]
    
        const errors = validations
            .map(([validator, message]) => validator(password) ? '' : message)
            .filter(message => message)
        
        errors.forEach(message => console.log(message));
    
        if (errors.length === 0){
            console.log('Password is valid')
        }
    }
}



solve('logIn')
console.log()
solve('MyPass123')
console.log()
solve('Pa$s$s')
