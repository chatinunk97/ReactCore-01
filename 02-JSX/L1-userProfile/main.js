const fullName = prompt("Give me your name")
const birthYear = prompt("Gib birth year pls")
// #1 React : JSX

const userProfile = 
<div className = "userProfile">
    <h1>{fullName}</h1>
    <p>{birthYear}</p>
</div>

// #2 ReactDOM : createRoot
const rootDom = document.querySelector('#root')

// #3 ReactDOM : TakeOver for Render Task
const root = ReactDOM.createRoot(rootDom)
root.render(userProfile)