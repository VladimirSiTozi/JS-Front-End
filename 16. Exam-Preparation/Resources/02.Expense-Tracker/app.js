window.addEventListener("load", solve);

function solve(){
    const expenseInputElement = document.getElementById('expense')
    const amountInputElement = document.getElementById('amount')
    const dateInputElement = document.getElementById('date')

    const addButton = document.getElementById('add-btn')

    const previewUlElement = document.getElementById('preview-list')

    addButton.addEventListener('click', () => {
        addEvent()

        const editButton = document.querySelector('.buttons button.edit')
        const okButton = document.querySelector('.buttons button.ok')
        
        editButton.addEventListener('click', () => {
            editButtonFunc()
        })

        const expensesUlElement = document.getElementById('expenses-list')
        const expensesDivElement = document.getElementById('expenses')

        okButton.addEventListener('click', () => {

            const expensePElement = document.createElement('p')
            const expensePElement2 = document.querySelector('#preview-list li article p:first-of-type')
            expensePElement.textContent = expensePElement2.textContent

            const amountPElement = document.createElement('p')
            const amountPElement2 = document.querySelector('#preview-list li article p:nth-of-type(2)')
            amountPElement.textContent = amountPElement2.textContent

            const datePElement = document.createElement('p')
            const datePElement2 = document.querySelector('#preview-list li article p:last-of-type')
            datePElement.textContent = datePElement2.textContent

            const articleElement = document.createElement('article')
            articleElement.appendChild(expensePElement)
            articleElement.appendChild(amountPElement)
            articleElement.appendChild(datePElement)

            console.log(articleElement)

            const liElement = document.createElement('li')
            liElement.classList.add('expenses-item')
            liElement.appendChild(articleElement)

            const deleteButton = document.createElement('button')
            deleteButton.classList.add('btn', 'delete')
            deleteButton.textContent = 'Delete'

            expensesDivElement.appendChild(deleteButton)

            addButton.removeAttribute("disabled")
            previewUlElement.innerHTML = ''

            deleteButton.addEventListener('click', () => {
                location.reload()
            })

            expensesUlElement.appendChild(liElement)
        })

    })


    function addEvent () {
        const liElement = document.createElement('li')
        liElement.classList.add('expense-item')
        
        const expensePElement = document.createElement('p');
        expensePElement.textContent = `Type: ${expenseInputElement.value}`
        const amountPElement = document.createElement('p');
        amountPElement.textContent = `Amount: ${amountInputElement.value}$`
        const datePElement = document.createElement('p');
        datePElement.textContent = `Date: ${dateInputElement.value}`
        
        const articleElement = document.createElement('article')
        articleElement.appendChild(expensePElement)
        articleElement.appendChild(amountPElement)
        articleElement.appendChild(datePElement)

        const divButtonsElement = document.createElement('div')
        divButtonsElement.classList.add('buttons')
        
        const editButtonElement = document.createElement('button')
        editButtonElement.classList.add('btn', 'edit')
        editButtonElement.textContent = 'edit'
        divButtonsElement.appendChild(editButtonElement)

        const okButtonElement = document.createElement('button')
        okButtonElement.classList.add('btn', 'ok')
        okButtonElement.textContent = 'ok'
        divButtonsElement.appendChild(okButtonElement)

        liElement.appendChild(articleElement)
        liElement.appendChild(divButtonsElement)
        previewUlElement.appendChild(liElement)

        addButton.setAttribute("disabled", true)
        expenseInputElement.value = ''
        amountInputElement.value = ''
        dateInputElement.value = ''

    }

    function editButtonFunc () {
        const expensePElement2 = document.querySelector('#preview-list li article p:first-of-type')
        expenseInputElement.value = expensePElement2.textContent.replace("Type: ", "")
        
        const amountPElement2 = document.querySelector('#preview-list li article p:nth-of-type(2)')
        amountInputElement.value = amountPElement2.textContent.replace(/^Amount: (\d+)\$$/, "$1")
        

        const datePElement2 = document.querySelector('#preview-list li article p:last-of-type')
        dateInputElement.value = datePElement2.textContent.replace("Date: ", "")
            
        previewUlElement.innerHTML = ''

        addButton.removeAttribute("disabled")
    }
}
