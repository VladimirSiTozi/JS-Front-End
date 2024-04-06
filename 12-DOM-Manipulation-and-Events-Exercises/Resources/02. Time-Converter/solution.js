function attachEventsListeners() {
    const allButtonElements = document.querySelectorAll('div [type="button"]')

    const daysElement = document.querySelector('main div #days')
    const hoursElement = document.querySelector('main div #hours')
    const minutesElement = document.querySelector('main div #minutes')
    const secondsElement = document.querySelector('main div #seconds')

    Array.from(allButtonElements).
    forEach(element => {
        element.addEventListener('click', (event) => {

            if (event.target.id === 'daysBtn') {
                covnertFromDays(Number(daysElement.value))
            } else if (event.target.id === 'hoursBtn') {
                covnvertFromHours(Number(hoursElement.value))
            } else if (event.target.id === 'minutesBtn') {
                covnertFromMinutes(Number(minutesElement.value))
            } else if (event.target.id === 'secondsBtn') {
                covnertFromSeconds(Number(secondsElement.value))
            }
        })
    })

    function covnertFromDays(number){
        daysElement.value = number
        hoursElement.value = number * 24
        minutesElement.value = number * 24 * 60
        secondsElement.value = number * 24 * 3600
    }

    function covnvertFromHours(number) {
        hoursElement.value = number
        daysElement.value = number / 24
        minutesElement.value = number * 60
        secondsElement.value = number * 3600
    }

    function covnertFromMinutes(number) {
        minutesElement.value = number
        daysElement.value = number / 24 / 60
        hoursElement.value = number / 60
        secondsElement.value = number * 60
    }

    function covnertFromSeconds(number) {
        secondsElement.value = number 
        hoursElement.value = number / 3600
        daysElement.value = number / 24 / 3600
        minutesElement.value = number / 60
    }
}