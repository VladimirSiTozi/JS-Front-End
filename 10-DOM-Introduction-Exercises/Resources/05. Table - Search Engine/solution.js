function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchInputElement = document.getElementById('searchField');
      const studentsElements = document.querySelectorAll('tbody tr')
      const searchInput = searchInputElement.value;

      for (const studentElement of studentsElements) {
            studentElement.classList.remove('select')
      }
      
      for (const studentElement of studentsElements) {
         for (const property of studentElement.children){
            if (property.textContent.toLowerCase().includes(searchInput.toLowerCase())){
               studentElement.className.add('select')
            }
         }
      }

      searchInputElement.value = ''
   }
}