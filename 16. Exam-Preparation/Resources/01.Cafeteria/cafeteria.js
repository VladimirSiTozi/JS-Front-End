function solve(input){
    const numberOfBaristas = input.shift()
    const allBaristas = []
    
    for (let i = 0; i < numberOfBaristas; i++) {
        const element = input.shift();
        const [name, shift, typesOfDrinks] = element.split(' ')
        const barista = {
            name,
            shift,
            drinks: typesOfDrinks.split(',')
        }
        allBaristas.push(barista)
    }

    for (const element of input) {
        if (element === 'Closed'){
            break;
        }
        
        const [command, baristaName, shiftType, coffeeType] = element.split(' / ')

        const currentBarista = allBaristas.find(employee => employee.name === baristaName)

        switch (command) {
            case 'Prepare':
                if (shiftType === currentBarista.shift && currentBarista.drinks.includes(coffeeType)){
                    console.log(`${currentBarista.name} has prepared a ${coffeeType} for you!`)
                } else{
                    console.log(`${currentBarista.name} is not available to prepare a ${coffeeType}.`)
                }
                break;

            case 'Change Shift':
               currentBarista.shift = shiftType
               console.log(`${currentBarista.name} has updated his shift to: ${shiftType}`)
                break;

            case 'Learn':
                if (currentBarista.drinks.includes(shiftType)){
                    console.log(`${currentBarista.name} knows how to make ${shiftType}.`)
                } else{
                    currentBarista.drinks.push(shiftType)
                    console.log(`${currentBarista.name} has learned a new coffee type: ${shiftType}.`)
                }
                break;
        }        
    }

    allBaristas.forEach(element => {
        console.log(`Barista: ${element.name}, Shift: ${element.shift}, Drinks: ${element.drinks.join(', ')}`)
    });
}

solve([
'3',
'Alice day Espresso,Cappuccino',
'Bob night Latte,Mocha',
'Carol day Americano,Mocha',
'Prepare / Alice / day / Espresso',
'Change Shift / Bob / night',
'Learn / Carol / Latte',
'Learn / Bob / Latte',
'Prepare / Bob / night / Latte',
'Closed'
])

solve([
'4',
'Alice day Espresso,Cappuccino',
'Bob night Latte,Mocha',
'Carol day Americano,Mocha',
'David night Espresso',
'Prepare / Alice / day / Espresso',
'Change Shift / Bob / day',
'Learn / Carol / Latte',
'Prepare / Bob / night / Latte',
'Learn / David / Cappuccino',
'Prepare / Carol / day / Cappuccino', 
'Change Shift / Alice / night', 
'Learn / Bob / Mocha', 
'Prepare / David / night / Espresso', 
'Closed'
])