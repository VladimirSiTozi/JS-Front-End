function solve(year){
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 == 0)){
        console.log('yes')
        return;
    } 
    
    console.log('no')

}

solve(1984)
solve(2003)
solve(4)
