function solve(speed, area){

    let message = ''
    let speedLimit = 0
    let difference = 0
    let statuses = ['speeding', 'excessive speeding', 'reckless driving']
    let status


    switch (area){
        case 'motorway':
            speedLimit = 130
            if (speed <= speedLimit){
                message = `Driving ${speed} km/h in a ${speedLimit} zone`;
            } else {
                difference = speed - speedLimit
                if (difference <= 20){
                    status = statuses[0]
                } else if (difference <= 40){
                    status = statuses[1]
                } else {
                    status = statuses[2]
                }
                message = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
            }
            break;

        case 'interstate':
            speedLimit = 90
            if (speed <= speedLimit){
                message = `Driving ${speed} km/h in a ${speedLimit} zone`;
            } else {
                difference = speed - speedLimit
                if (difference <= 20){
                    status = statuses[0]
                } else if (difference <= 40){
                    status = statuses[1]
                } else {
                    status = statuses[2]
                }
                message = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
            }
            break;

        case 'city':
            speedLimit = 50
            if (speed <= speedLimit){
                message = `Driving ${speed} km/h in a ${speedLimit} zone`;
            } else {
                difference = speed - speedLimit
                if (difference <= 20){
                    status = statuses[0]
                } else if (difference <= 40){
                    status = statuses[1]
                } else {
                    status = statuses[2]
                }
                message = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
            }
            break;

        case 'residential':
            speedLimit = 20
            if (speed <= speedLimit){
                message = `Driving ${speed} km/h in a ${speedLimit} zone`;
            } else {
                difference = speed - speedLimit
                if (difference <= 20){
                    status = statuses[0]
                } else if (difference <= 40){
                    status = statuses[1]
                } else {
                    status = statuses[2]
                }
                message = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
            }
            break;
    }

    console.log(message)
}

solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')