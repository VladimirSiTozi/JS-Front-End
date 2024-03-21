function solve(str){
    let word = String(str)
    let result = 0

    for (let i=0; i<word.length; i++){
        result += Number(word[i])
    }
        
    console.log(result)
}

solve(245678)
solve(97561)
solve(543)