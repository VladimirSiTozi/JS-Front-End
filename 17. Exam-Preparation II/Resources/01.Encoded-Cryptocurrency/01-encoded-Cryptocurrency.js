function solve (input) {
    let encodedMessage = input.shift()

    for (const command of input) {
        if (command === 'Buy'){
            console.log(`The cryptocurrency is: ${encodedMessage}`)
            break;
        } else if (command.startsWith('TakeEven')){
            let newEncodedMessage = ''
            for (let i = 0; i < encodedMessage.length; i++) {
                const element = encodedMessage[i];
                if (i % 2 ==0) {
                    newEncodedMessage += element
                }
            }
            encodedMessage = newEncodedMessage
            console.log(encodedMessage)

        } else if (command.startsWith('ChangeAll')){
            let newEncodedMessage = ''
            const [newCommand, substring, replacment] = command.split('?')
            for (const element of encodedMessage) {
                if (element === substring){
                    newEncodedMessage = encodedMessage.replace(substring, replacment)
                    encodedMessage = newEncodedMessage
                }
            }
            console.log(encodedMessage)

        } else if (command.startsWith('Reverse')){
            let newEncodedMessage = ''
            const [newCommand, substring] = command.split('?')
            if(encodedMessage.includes(substring)){
                let newEncodedMessage = encodedMessage.replace(substring, '')
                encodedMessage = newEncodedMessage
                let reverseStr = reverseString(substring)
                encodedMessage += reverseStr
                console.log(encodedMessage)
            } else {
                console.log('error')
            }
        }
    }

    function reverseString(str){ 
        const reversedString = str.split("").reduce((acc, char) => char + acc, ""); 
        return reversedString
    }
}

solve([
"z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?m?g",
"Reverse?adshk",
"ChangeAll?z?i",
"Buy"
])

console.log('===================')

solve([
"PZDfA2PkAsakhnefZ7aZ",
"TakeEven",
"TakeEven",
"TakeEven",
"ChangeAll?Z?X",
"ChangeAll?A?R",
"Reverse?PRX",
"Buy"
])