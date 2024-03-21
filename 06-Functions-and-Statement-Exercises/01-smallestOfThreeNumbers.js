function solve(a, b, c) {
    // console.log(Math.min(a, b, c))

    const result = smallestNum(a, b, c)

    console.log(result)

    function smallestNum(...numbers){
        let minNum = Number.MAX_SAFE_INTEGER;

        for (const num of numbers) {
            if (minNum > num) {
                minNum = num
            }
        }

        return minNum
    }
}

solve(2, 5, 3)
solve(600, 342, 123)
solve(25, 21, 4)
solve(2, 2, 2)