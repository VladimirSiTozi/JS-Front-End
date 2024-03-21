function solve(){
    let arr = [1, 2, 3]
    arr.length = 10
    console.log(arr)

    arr[10] = 11
    console.log(arr)

    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }

}

solve()