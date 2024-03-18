function solve(grade) {
    const result = formatGrade(grade)

    console.log(result)

    function formatGrade(grade) {
        if (grade < 3){
            return 'Fail (2)'
        } else if (grade < 3.50) {
            return `Poor (${grade.toFixed(2)})`
        } else if (grade < 4.50) {
            return `Good (${grade.toFixed(2)})`
        } else if (grade < 5.50) {
            return `Very good (${grade.toFixed(2)})`
        } else if (grade <= 6) {
            return `Excellent (${grade.toFixed(2)})`
        }
    }
}

solve(3.33)
solve(4.50)
solve(2.99)