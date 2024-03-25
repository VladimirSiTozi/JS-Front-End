function solve(input) {
    const adressBook = {}

    for (const record of input) {
        const [name, adress] = record.split(':')

        adressBook[name] = adress
    }

    const sortedAdressBook = Object.entries(adressBook)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([name, adress]) => console.log(`${name} -> ${adressBook[name]}`))

    // for (const name of sortedAdressBook) {
    //     console.log(`${name} -> ${adressBook[name]}`)
    // }
}

solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])

console.log('---')

solve(['Bob:Huxley Rd',
'John:MilwaukeeCrossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:MestaCrossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])