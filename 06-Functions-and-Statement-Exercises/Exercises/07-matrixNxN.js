function solve(number) {
    let myMatrix = matrixCreator(number)

    printMatrix(myMatrix)

    function matrixCreator(num) {
        let matrix = []
    
        for (let r = 0; r < num; r++) {
            matrix.push([])
            for (let c = 0; c< num; c++) {
                matrix[r].push(num)
            }
        }
    
        return matrix
    }
    
    function printMatrix(matrix) {
        matrix.forEach(row => console.log(row.join(' ')));
    }
}

solve(3)
solve(7)
