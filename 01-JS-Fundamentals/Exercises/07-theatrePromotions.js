function solve(day, age){
    let ticket

    if (age < 0 || age > 122){
        console.log('Error!')
    } else {
        if (day === 'Weekday'){
        if (0 <= age && age <= 18){
            ticket = 12
        } else if (18 < age && age <= 64){
            ticket = 18
        } else if (64 < age && age <= 122){
            ticket = 12
        }
        
        } else if (day === 'Weekend'){
            if (0 <= age && age <= 18){
                ticket = 15
            } else if (18 < age && age <= 64){
                ticket = 20
            } else if (64 < age && age <= 122){
                ticket = 15
            }
        } else if (day === 'Holiday'){
            if (0 <= age && age <= 18){
                ticket = 5
            } else if (18 < age && age <= 64){
                ticket = 12
            } else if (64 < age && age <= 122){
                ticket = 10
            }
        }
        console.log(`${ticket}$`)
    }
}

solve('Weekday',42)
solve('Holiday', -12)
solve('Holiday', 15)