function generateReport() {
    const thElements = document.querySelectorAll('table thead th')
    const trElements = document.querySelectorAll('table tbody tr')
    const outputElement = document.getElementById('output')

    const columns = Array
        .from(thElements)
        .map((thElement) => {
            const checkboxElement = thElement.querySelector('input')
            return {
                name: thElement.textContent.toLocaleLowerCase().trim(),
                active: checkboxElement.checked
            };       
    });

    const reportArray = Array
        .from(trElements)
        .map(trElement => {
            const tdElements = trElement.querySelectorAll('td') 
        
        const resultData = Array
            .from(tdElements)
            .reduce((result, tdElement, i) => {
                if (!columns[i].active){
                    return result
                }
                
                const columnName = columns[i].name;
                result[columnName] = tdElement.textContent

                return result
            }, {})

        return resultData;
        })

    outputElement.value = JSON.stringify(reportArray, null, 2)
}