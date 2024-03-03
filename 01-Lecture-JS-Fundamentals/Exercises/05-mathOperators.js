function solve(num_a, num_b, operator){

    let result;
    switch (operator) {
        case '+': result = num_a + num_b; break;
        case '-': result = num_a - num_b; break;
        case '/': result = num_a / num_b; break;
        case '*': result = num_a * num_b; break;
        case '%': result = num_a % num_b; break;
        case '**': result = num_a ** num_b; break;
    }

    console.log(result);
}

solve(5, 6, '+')
solve(15, 6, '-')
solve(5, 6, '*')
