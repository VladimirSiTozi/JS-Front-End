function solve(input){
    const numberOfCharacters = input.shift()
    let allCharacters = []

    for (let i = 0; i < numberOfCharacters; i++) {
        const [name, HP, bullets] = input.shift().split(' ');
        const character ={
            name,
            HP: Number(HP),
            bullets: Number(bullets),
        }
        allCharacters.push(character)
    }

    for (const round of input) {

        
        if (round.startsWith('FireShot')){
            const [command, name, target] = round.split(' - ')
            const currentCharacter = allCharacters.find(guy => guy.name === name)

            if (currentCharacter.bullets > 0){
                currentCharacter.bullets -= 1
                console.log(`${currentCharacter.name} has successfully hit ${target} and now has ${currentCharacter.bullets} bullets!`)
            } else {
                console.log(`${currentCharacter.name} doesn't have enough bullets to shoot at ${target}!`)
            }

        } else if (round.startsWith('TakeHit')){
            const [command, name, damage, attacker] = round.split(' - ')
            const currentCharacter = allCharacters.find(guy => guy.name === name)

            if (currentCharacter.HP > Number(damage)){
                currentCharacter.HP -= Number(damage)
                console.log(`${currentCharacter.name} took a hit for ${damage} HP from ${attacker} and now has ${currentCharacter.HP} HP!`)
            } else {
                allCharacters = allCharacters.filter(player => player.name !== name);
                console.log(`${currentCharacter.name} was gunned down by ${attacker}!`);
            }

        } else if (round.startsWith('Reload')){
            const [command, name] = round.split(' - ')
            const currentCharacter = allCharacters.find(guy => guy.name === name)

            if (currentCharacter.bullets < 6){
                const loadedBullets = 6 - currentCharacter.bullets
                currentCharacter.bullets = 6
                console.log(`${currentCharacter.name} reloaded ${loadedBullets} bullets!`)
            } else {
                console.log(`${currentCharacter.name}'s pistol is fully loaded!`)
            }

        } else if (round.startsWith('PatchUp')){
            const [command, name, amount] = round.split(' - ')
            const currentCharacter = allCharacters.find(guy => guy.name === name)

            if (currentCharacter.HP < 100){
                currentCharacter.HP += Number(amount)
                console.log(`${currentCharacter.name} patched up and recovered ${amount} HP!`)
            } else {
                console.log(`${currentCharacter.name} is in full health!`)
            }
        } else if (round.startsWith('Ride')){
            break
        }
        
    }

    for (const guy of allCharacters) {
        console.log(`${guy.name}\nHP: ${guy.HP}\nBullets: ${guy.bullets}`)
    }
}

// solve(["2",
// "Gus 100 0",
// "Walt 100 6",
// "FireShot - Gus - Bandit",
// "TakeHit - Gus - 100 - Bandit",
// "Reload - Walt",
// "Ride Off Into Sunset"])

// solve(["2",
// "Jesse 100 4",
// "Walt 100 5",
// "FireShot - Jesse - Bandit",
// "TakeHit - Walt - 30 - Bandit",
// "PatchUp - Walt - 20" ,
// "Reload - Jesse",
// "Ride Off Into Sunset"])
