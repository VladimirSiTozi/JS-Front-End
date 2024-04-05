function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const inputText = document.querySelector('.restaurant-race-class #inputs textarea').value;
      const pattern = /"([^"]*)"/g
      const matches = inputText.matchAll(pattern)
      const allRestaurants = []
      const bestRestaurantElement = document.querySelector('#bestRestaurant p')
      const workersElement = document.querySelector('#workers p')
      

      for (const match of matches) {
         
         const [restaurantName, allEmployees] = match[1].split(' - ')

         restaurant = {
         'rName': restaurantName,
         'totalSalary': 0,
         'bestSalary': 0,
         'employeesList': []
         }

         for (const obj of allRestaurants) {
            if (obj.rName === restaurantName){
               restaurant = Object.assign({}, restaurant, obj);
               const index = allRestaurants.indexOf(obj)
               allRestaurants.splice(index, 1)
            }
         }

         const employees = allEmployees.split(', ')
         for (const employee of employees) {
            const [employeeName, salary] = employee.split(' ')
            const person = {
               eName: employeeName,
               salary: Number(salary)
            }

            if (restaurant.employeesList.employeeName){
               person[salary] = salary;
            } else {
               restaurant.employeesList.push(person)
            }

            restaurant['totalSalary'] += Number(salary)

            if (Number(salary) > restaurant['bestSalary']) {
               restaurant['bestSalary'] = Number(salary)
            }
         }

         restaurant['avgSalary'] = restaurant['totalSalary'] / restaurant['employeesList'].length
      
      allRestaurants.push(restaurant)
      }
   console.log(allRestaurants)

   let sortedResraurants = allRestaurants.sort((a, b) => {
      return b.avgSalary - a.avgSalary
   })
   
   let theBestRestaurant = sortedResraurants[0]
   // console.log(theBestRestaurant)

   bestRestaurantElement.textContent = `Name: ${theBestRestaurant.rName} Average Salary: ${theBestRestaurant.avgSalary.toFixed(2)} Best Salary: ${theBestRestaurant.bestSalary.toFixed(2)}`
   let employeeOutput = ''

   for (const worker of theBestRestaurant.employeesList) {
      employeeOutput += `Name: ${worker.eName} With Salary: ${worker.salary} `
   }
   workersElement.textContent = employeeOutput
   }
}