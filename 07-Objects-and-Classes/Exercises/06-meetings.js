function solve(input) {
    let meetings = {}

    for (const record of input) {
        const[weekday, name] = record.split(' ')

        if (meetings[weekday]){
            console.log(`Conflict on ${weekday}!`)
        } else {
            meetings[weekday] = name
            console.log(`Scheduled for ${weekday}`)
        }
    }

    for (const meeting in meetings) {
        console.log(`${meeting} -> ${meetings[meeting]}`)
    }
}

solve(['Monday Peter', 
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])

console.log('---')
solve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'])