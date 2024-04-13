function solve(input){
    const numberOfAstronauts = input.shift()
    const crew = []

    for (let i = 0; i < numberOfAstronauts; i++) {
        const [name, oxygen, energy] = input.shift().split(' ');
        const astronaut = {
            name,
            oxygen: Number(oxygen),
            energy: Number(energy)
        }
        crew.push(astronaut)
    }

    for (const command of input) {
        const [currentCommand, austroName, amount] = command.split(' - ')

        const currentAustronaut = crew.find(employee => employee.name === austroName)

        if(command === 'End'){
            break
        } else if (command.startsWith('Explore')){
            if (currentAustronaut.energy > Number(amount)){
                currentAustronaut.energy -= Number(amount)
                console.log(`${currentAustronaut.name} has successfully explored a new area and now has ${currentAustronaut.energy} energy!`)
            } else {
                console.log(`${currentAustronaut.name} does not have enough energy to explore!`)
            }
        } else if (command.startsWith('Refuel')){
            let newAmount = Number(amount)
            currentAustronaut.energy += newAmount
            if (currentAustronaut.energy >= 200){
                newAmount = Math.abs(currentAustronaut.energy - 200 - newAmount)
                currentAustronaut.energy = 200
            }
            console.log(`${currentAustronaut.name} refueled their energy by ${newAmount}!`)

        } else if (command.startsWith('Breathe')){
            let newAmount = Number(amount)
            currentAustronaut.oxygen += newAmount
            if (currentAustronaut.oxygen >= 100){
                newAmount = Math.abs(currentAustronaut.oxygen - 100 - newAmount)
                currentAustronaut.oxygen = 100
            }
            console.log(`${currentAustronaut.name} took a breath and recovered ${newAmount} oxygen!`)

        }
    }

    for (const astronaut of crew) {
        console.log(`Astronaut: ${astronaut.name}, Oxygen: ${astronaut.oxygen}, Energy: ${astronaut.energy}`)
    }
    
}

// solve([  '3',
// 'John 50 120',
// 'Kate 80 180',
// 'Rob 70 150',
// 'Explore - John - 50',
// 'Refuel - Kate - 30',
// 'Breathe - Rob - 20',
// 'End']
// )

solve([
'4',
'Alice 60 100',
'Bob 40 80',
'Charlie 70 150',
'Dave 80 180',
'Explore - Bob - 60',
'Refuel - Alice - 30',
'Breathe - Charlie - 50',
'Refuel - Dave - 40',
'Explore - Bob - 40',
'Breathe - Charlie - 30',
'Explore - Alice - 40',
'End'
])