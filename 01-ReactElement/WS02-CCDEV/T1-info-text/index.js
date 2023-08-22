//Target HTML <p class="info-text">
    // Build a beautiful, modern website with flexible components built from scratch.
    // </p>

// #1 React : CreateElement
const pr = React.createElement('p',null,'Build a beautiful, modern website with flexible components built from scratch.')

// #2 ReactDOM : createRoot
const rootDom = document.querySelector('#root')

// #3 ReactDOM : TakeOver for Render Task

const root = ReactDOM.createRoot(rootDom)
root.render(pr)