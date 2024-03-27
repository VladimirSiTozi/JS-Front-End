function solve(input) {
    employees = {}

    for (const employee of input) {
        const personalNumber = employee.length
        employees[employee] = personalNumber
    }

    for (const employee in employees) {
        console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`)
    };
}

function secondSolve(input) {
    const employeeNames = []

    for (const name of input) {
        const employee = {
            name,
            personalNumber: name.length,
        }

        employeeNames.push(employee)
    }

    for (const employee of employeeNames) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`)
    }
}

solve([
'Silas Butler',    
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal' 
])

console.log('=====')
secondSolve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])