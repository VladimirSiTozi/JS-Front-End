function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const inputText = document.querySelector('.restaurant-race-class #inputs textarea').value;
      const pattern = /"([^"]*)"/g
      const matches = inputText.matchAll(pattern)

      for (const match of matches) {
         console.log(match[1])
         restaurant = {}
         const [restaurantName, allEmployees] = match[1].split(' - ')
         restaurant['rName'] = restaurantName
         restaurant['totalSalary'] = 0
         restaurant['bestSalary'] = 0

         const employees = allEmployees.split(', ')
         for (const employee of employees) {
            const [employeeName, salary] = employee.split(' ')
            restaurant[employeeName] = Number(salary)
            restaurant['totalSalary'] += Number(salary)

            if (salary > restaurant[bestSalary]) {
               restaurant['bestSalary'] = salary
            }
         }

      }
      
   }
}