function getInfo() {
    const baseURL = 'http://localhost:3030/jsonstore/bus/businfo';
    const stopIdElement = document.getElementById('StopId');
    const stopNameElement = document.getElementById('stopName');
    const busesElement = document.getElementById('buses');

    const stopId = stopIdElement.value;
    fetch(`${baseURL}/${stopId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            stopNameElement.textContent = data.name

            for (const bus in data.buses) {
                const liElement = document.createElement('li');
                liElement.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`
                busesElement.appendChild(liElement);
            }
        })
        .catch(() => stopNameElement.textContent = 'Error');


}