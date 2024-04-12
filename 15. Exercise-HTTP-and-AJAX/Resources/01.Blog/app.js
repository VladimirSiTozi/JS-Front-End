function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/blog'
    const loadPostsButtonElement = document.getElementById('btnLoadPosts')
    const selectElement = document.getElementById('posts')

    const viewButtonElement = document.getElementById('btnViewPost')
    const postBodyElement = document.getElementById('post-body')
    const postCommentsListElement = document.getElementById('post-comments')

    const postTitleElement = document.getElementById('post-title')
    
    loadPostsButtonElement.addEventListener('click', () => {
        selectElement.innerHTML = ''

        fetch (`${baseUrl}/posts`)
            .then(res => res.json())
            .then(posts => {
                for (const post of Object.values(posts)) {
                    const newOption = document.createElement('option')
                    newOption.value = post.id
                    newOption.textContent = post.title

                    selectElement.appendChild(newOption)
                }
                
            })
    })

    viewButtonElement.addEventListener('click', () => {
        postBodyElement .innerHTML = ''
        postCommentsListElement.innerHTML = ''
        postTitleElement.innerHTML = ''

        const selectedPostId = selectElement.value


        fetch (`${baseUrl}/posts/${selectedPostId}`)
            .then(res => res.json())
            .then(selectedPost => {
                postBodyElement.textContent = selectedPost.body
                postTitleElement.textContent = selectedPost.title
            })

        

        fetch (`${baseUrl}/comments`)
            .then(res => res.json())
            .then(comments => {
                for (const comment of Object.values(comments)) {
                    if (comment.postId === selectedPostId){
                        const liPostElement = document.createElement('li')
                        liPostElement.textContent = comment.text
                        liPostElement.id = comment.id
                        
                        postCommentsListElement.appendChild(liPostElement)
                    }
                    
                }
            })
    })
}

attachEvents();