// #1 React : CreateElement

////// HTML Image //////
{/* <button>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span>Button</span>
</button> */}

////// Convert in to REACT ELEMENT //////
const span1 = React.createElement('span',null)
const span2 = React.createElement('span',null)
const span3 = React.createElement('span',null)
const span4 = React.createElement('span',null)
const span5 = React.createElement('span',null,'Button')

const btn = React.createElement('button',null,span1,span2,span3,span4,span5)

// #2 ReactDOM : createRoot
const rootDom = document.querySelector('#root')

// #3 ReactDOM : TakeOver for Render Task
const root = ReactDOM.createRoot(rootDom)
root.render(btn)
