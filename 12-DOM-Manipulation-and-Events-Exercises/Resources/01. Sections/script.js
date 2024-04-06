function create(words) {
   const originalDivElement = document.getElementById('content');

   for (const word of words) {
      const pElement = document.createElement('p')
      pElement.textContent = word
      pElement.style.display = 'none'
      
      const divElement = document.createElement('div')
      divElement.appendChild(pElement)

      divElement.addEventListener('click', (event) => {
         if (pElement.style.display === 'none') {
            pElement.style.display = 'block'
         } else {
            pElement.style.display = 'none'
         }
      })

      originalDivElement.appendChild(divElement)
   }
}

