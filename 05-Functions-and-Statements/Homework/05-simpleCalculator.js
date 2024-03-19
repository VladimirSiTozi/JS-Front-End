function solve(a, b, operator) {
    function getOperation(operator) {
        switch (operator) {
            case 'multiply':
                return (a, b) => a * b;
            case 'divide':
                return (a, b) => a / b
            case 'add':
                return (a, b) => a + b
            case 'subtract':
                return (a, b) => a - b
        }
        console.log(result)
    }
    
    const operation = getOperation(operator);

    const result = operation(a, b);

    console.log(result)
}

solve(5, 5, 'multiply')
solve(40, 8, 'divide')
solve(12, 19, 'add')
solve(50, 13, 'subtract')