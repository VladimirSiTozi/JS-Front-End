const usersUrl = 'http://localhost:3030/users'

const registerView = document.getElementById('register-view')
const loginView = document.getElementById('login-view')
const homeView = document.getElementById('home-view')
const sections = document.getElementById('views')
const mainElement = document.querySelector('body > main')

const userButton = document.getElementById('user')
const guestButton = document.getElementById('guest')

const homeLink = document.getElementById('home') 
const logoutLink = document.getElementById('logout') 
const loginLink = document.getElementById('login') 
const registerLink = document.getElementById('register') 

const loginButton = loginView.querySelector('button')
const emainInput = loginView.querySelector('input[name=email]')
const passwordInput = loginView.querySelector('input[name=password]')

const userSpanElement = document.querySelector('nav p.email')

sections.style.display = 'none'
mainElement.appendChild(homeView)

updateNavigationData()

loginLink.addEventListener('click', () => {
    hideSections()
    mainElement.appendChild(loginView)
})

loginButton.addEventListener('click', async (e) => {
    e.preventDefault();

    try {
            const response = await fetch(`${usersUrl}/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify({
                'email': emainInput.value,
                'password': passwordInput.value,
            })
        })

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        const userData = await response.json()
        
        setUserData(userData)

        hideSections()
        mainElement.appendChild(homeView)

        updateNavigationData()
    } catch (err) {
        document.querySelector('.notification').textContent = "Ivalid username or password"
    }

    // const loginData = await response.json()
    // console.log(loginData)

    

})

logoutLink.addEventListener('click', (e) => {
    removeUserData()
    updateNavigationData()
})

function hideSections() {
    sections.appendChild(mainElement.children[0])
    localStorage
    }

function setUserData(userData){
    localStorage.setItem('accessToken', userData.accessToken)
    localStorage.setItem('email', userData.email)
    localStorage.setItem('username', userData.username)
    localStorage.setItem('_id', userData._id)
}

function removeUserData(){
    localStorage.removeItem('accessToken')
    localStorage.removeItem('email')
    localStorage.removeItem('username')
    localStorage.removeItem('_id')
}

function updateNavigationData(){
    const username = localStorage.getItem('username')
    if (username) {
        guestButton.style.display = 'none'
        userButton.style.display = 'inline'
        userSpanElement.textContent = username
    } else {
        guestButton.style.display = 'inline'
        userButton.style.display = 'none'
        userSpanElement.textContent = 'guest'
    }
}