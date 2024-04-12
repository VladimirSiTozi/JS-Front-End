function attachEvents() {
  const baseUrl = 'http://localhost:3030/jsonstore/collections/students'

  const studentsTbodyElement = document.querySelector('#results tbody')

  const firstNameInputElement = document.querySelector('.inputs [name="firstName"]')
  const lastNameInputElement = document.querySelector('.inputs [name="lastName"]')
  const facultyNumberInputElement = document.querySelector('.inputs [name="facultyNumber"]')
  const gradeInputElement = document.querySelector('.inputs [name="grade"]')

  const sumbmitButtonElement = document.getElementById('submit')

  addEventListener('load', () => {
    loadStudents()
  })

  sumbmitButtonElement.addEventListener('click', () => {
    fetch (baseUrl, {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        'firstName': firstNameInputElement.value,
        'lastName': lastNameInputElement.value,
        'facultyNumber': facultyNumberInputElement.value,
        'grade': gradeInputElement.value
      })
    })
      .then(res => res.json())
      .catch()

      loadStudents()

      firstNameInputElement.value = ''
      lastNameInputElement.value = ''
      facultyNumberInputElement.value = ''
      gradeInputElement.value = ''
  })

  function loadStudents() {
    studentsTbodyElement.innerHTML = ''

    fetch(baseUrl)
      .then(res => res.json())
      .then(students => {
        for (const student of Object.values(students)) {
          createStudent(student)
          
        }
    })
  }

  function createStudent (student) {
    const firstName = document.createElement('th')
    firstName.textContent = student.firstName
    const lastName = document.createElement('th')
    lastName.textContent = student.lastName
    const facultyNumber = document.createElement('th')
    facultyNumber.textContent = student.facultyNumber
    const grade = document.createElement('th')
    grade.textContent = student.grade

    const studentTrElement = document.createElement('tr')
    studentTrElement.appendChild(firstName)
    studentTrElement.appendChild(lastName)
    studentTrElement.appendChild(facultyNumber)
    studentTrElement.appendChild(grade)
    
    studentsTbodyElement.appendChild(studentTrElement)
  }
}

attachEvents();