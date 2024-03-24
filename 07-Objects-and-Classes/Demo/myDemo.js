function solve(firstName, lastName, age) {
    const person = {
        firstName,
        lastName,
        age,

        walk: function() { 
            console.log('walking...')
        },
    
        sleep: function(){
            console.log('Sleeping - Zzzz...')
        }
    }

    return person
}

const vlado = solve('vlado', 'simeonov', 24)

vlado.walk();
vlado.sleep()
