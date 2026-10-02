let blogPosts = [
    {
        title: "Welcome to My Blog",
        content: "This is my first blog post. I'm excited to share my thoughts and experiences with you all!"
    },

    {
        title: "Learning JavaScript",
        content: "JavaScript is a powerful programming language that enables interactive web development. Today I learned about event listeners and DOM manipulation."
    },

    {
        title: "Web Development Tips",
        content: "Always write clean and maintainable code. Use meaningful variable names and comment your code when necessary."
    }
]


// Select elements
const container = document.getElementById("blog-posts-container")
const addPostBtn = document.getElementById("add-post-btn")


// Create post
const createPost = (getTitle, getContent) => {

    const blogPost = document.createElement("div")
    blogPost.classList.add("blog-post")

    const postTitle = document.createElement("h2")
    postTitle.classList.add("post-title")
    postTitle.textContent = getTitle

    const editTitleBtn = document.createElement("button")
    editTitleBtn.textContent = "Edit Title"
    editTitleBtn.addEventListener("click", editTitle)

    const postContent = document.createElement("p")
    postContent.classList.add("post-content")
    postContent.textContent = getContent

    const editContentBtn = document.createElement("button")
    editContentBtn.textContent = "Edit Content"
    editContentBtn.addEventListener("click", editContent)

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete Post"
    deleteBtn.addEventListener("click", deletePost)

    blogPost.appendChild(postTitle)
    blogPost.appendChild(editTitleBtn)
    blogPost.appendChild(postContent)
    blogPost.appendChild(editContentBtn)
    blogPost.appendChild(deleteBtn)

    container.appendChild(blogPost)
}


// Add post
const addPost = () => {

    const newTitle = prompt("Enter blog post title:")

    if (!newTitle) {
        return
    }

    const newContent = prompt("Enter blog post content:")

    if (!newContent) {
        return
    }

    createPost(newTitle, newContent)
}


// Edit title
const editTitle = (event) => {

    const blogPost = event.currentTarget.parentElement

    const title = blogPost.querySelector(".post-title")

    const newTitle = prompt(
        "Enter new title:",
        title.textContent
    )

    if (newTitle) {
        title.textContent = newTitle
    }
}


// Edit content
const editContent = (event) => {

    const blogPost = event.currentTarget.parentElement

    const content = blogPost.querySelector(".post-content")

    const newContent = prompt(
        "Enter new content:",
        content.textContent
    )

    if (newContent) {
        content.textContent = newContent
    }
}


// Delete post
const deletePost = (event) => {

    const blogPost = event.currentTarget.parentElement

    const title =
        blogPost.querySelector(".post-title").textContent

    const toDelete = confirm(
        `Are you sure you want to delete "${title}"?`
    )

    if (toDelete) {

        blogPost.remove()

        alert(`Post "${title}" deleted successfully`)
    }
}


// Show posts
blogPosts.forEach((post) => {

    createPost(post.title, post.content)
})


// Add button event
addPostBtn.addEventListener("click", addPost)