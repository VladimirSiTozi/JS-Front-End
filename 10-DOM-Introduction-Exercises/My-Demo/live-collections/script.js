const movieListElement = document.getElementById('movies')

const liveElementsMovies = movieListElement.children
const liveNodeList = movieListElement.childNodes
const staticNodeList = document.querySelectorAll('#movies li')

setTimeout(() => {
    const movieLiElement = document.createElement('li')
    movieLiElement.textContent = 'Fast and Furius'
    movieListElement.appendChild(movieLiElement)

    console.log(liveElementsMovies)
    console.log(liveNodeList)
    console.log(staticNodeList)
    console.log('========')
}, 3000)

setTimeout(() => {
    const movieLiElement = document.createElement('li')
    movieLiElement.textContent = 'Fast and Furius2'
    movieListElement.appendChild(movieLiElement)

    console.log(liveElementsMovies)
    console.log(liveNodeList)
    console.log(staticNodeList)
}, 6000)