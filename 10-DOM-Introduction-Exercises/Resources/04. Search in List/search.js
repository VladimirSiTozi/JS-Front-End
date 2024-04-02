function search() {
   const citiesElements = document.getElementById('towns')
   const resultElement = document.getElementById('result')
   const searchText = document.getElementById('searchText').value

   const citiesFound = []
   const townElements = Array.from(citiesElements.children);
   for (const townElement of townElements) {
      if (townElement.textContent.toLowerCase().includes(searchText.toLowerCase())){
         townElement.style.textDecoration = 'underline'
         townElement.style.fontWeight = 'bold'
         citiesFound.push(townElement)
      }
   }

   resultElement.textContent = `${citiesFound.length} matches found`
}
