function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster'

    const locationElement = document.getElementById('location')
    const getWatherButtonElement = document.getElementById('submit')
    const forecastElement = document.getElementById('forecast');
    const currentElement = document.getElementById('current')

    const weatherSymbols = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°',
    }

    getWatherButtonElement.addEventListener('click', () => {
        fetch (`${baseUrl}/locations`)
            .then(res => res.json())
            .then(([today, upcoming]) => {
                console.log(today)
                console.log(upcoming)
                const { code } = today.find(locaiton => locaiton.name === locationElement.value);

                return Promise.all([
                    fetch(`${baseUrl}/today/${code}`),
                    fetch(`${baseUrl}/upcoming/${code}`)
                ])

            })

            .then (ressponses => Promise.all(ressponses.map(res => res.json()))
            .then(todayData => {

                forecastElement.style.display = 'block'

                const symbolSpanElement = document.createElement('span');
                symbolSpanElement.classList.add('condition')
                symbolSpanElement.classList.add('symbol')
                symbolSpanElement.textContent = weatherSymbols[todayData.forecast.condition]
                 
                const anotherSpan = document.createElement('span')
                anotherSpan.innerHTML = `
                <span class="condition">
                    <span class="forecast-data">${todayData.name}</span>
                    <span class="forecast-data">${todayData.forecast.low}/${todayData.forecast.high}</span>
                    <span class="forecast-data">${todayData.forecast.condition}</span>
                </span>
                `;

                const forecastsElement = document.createElement('div')
                forecastElement.classList.add('forecasts');
                forecastElement.appendChild(symbolSpanElement);
                forecastElement.appendChild(anotherSpan)

                currentElement.appendChild(forecastElement)

            })
        
    }) 
}

attachEvents();