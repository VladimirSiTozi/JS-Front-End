function solve(people, type, day){

    let pricePerPerson 
    let totalPrice

    if (type == 'Students'){
        if (day == 'Friday'){
            pricePerPerson = 8.45
        } else if (day == 'Saturday'){
            pricePerPerson = 9.80
        } else if (day == 'Sunday'){
            pricePerPerson = 10.46
        }

        totalPrice = people * pricePerPerson

        if (people >= 30){
            pricePerPerson -= pricePerPerson * 0.15
            totalPrice = people * pricePerPerson
        }

    } else if (type == 'Business'){
        if (day == 'Friday'){
            pricePerPerson = 10.90
        } else if (day == 'Saturday'){
            pricePerPerson = 15.60
        } else if (day == 'Sunday'){
            pricePerPerson = 16
        }

        totalPrice = people * pricePerPerson

        if (people >= 100){
            totalPrice -= pricePerPerson * 10
        }

    } else if (type == 'Regular'){
        if (day == 'Friday'){
            pricePerPerson = 15
        } else if (day == 'Saturday'){
            pricePerPerson = 20
        } else if (day == 'Sunday'){
            pricePerPerson = 22.50
        }

        totalPrice = people * pricePerPerson
        
        if (people >= 10 && people <= 20){
            totalPrice *= totalPrice * 0.5
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

solve(30, "Students", "Sunday")
solve(40, "Regular", "Saturday")