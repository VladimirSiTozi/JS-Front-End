function solve(number){
    let textNumber = String(number);
    let totalSum = 0;
    let isAllSame = true;

    for (let i=0; i<textNumber.length - 1; i++){
        if (textNumber[i] !== textNumber[i+1]){
            isAllSame = false
        }

        totalSum += Number(textNumber[i])
    }

    totalSum += Number(textNumber[textNumber.length -1])

    console.log(isAllSame)
    console.log(totalSum)
}

solve(2222222)
solve(1234)