// #1 React : CreateElement
const btn = React.createElement('button',{className : "btn"},'BUTTON')
// #2 ReactDOM : createRoot

const domRoot = document.querySelector("#root")

// #3 ReactDOM : TakeOver for Render Task
const root = ReactDOM.createRoot(domRoot)
root.render(btn)