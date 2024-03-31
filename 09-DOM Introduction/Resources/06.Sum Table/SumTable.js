function sumTable() {
    const tdCostElements = document.querySelectorAll('tr td:last-of-type:not(#sum)')
    const tdSumElements = document.getElementById('sum')

    const sum = Array
        .from(tdCostElements)
        .reduce((sum, element) => sum + Number(element.textContent), 0)

    tdSumElements.textContent = sum
}