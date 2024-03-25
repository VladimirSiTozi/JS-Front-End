function solve(input) {
    let phoneBook = {}

    for (const record of input) {
        const [name, phone] = record.split(' ')
        phoneBook[name] = phone
    }
    
    for (const record in phoneBook) {
        console.log(`${record} -> ${phoneBook[record]}`)
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])

console.log('---')

solve(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344'])