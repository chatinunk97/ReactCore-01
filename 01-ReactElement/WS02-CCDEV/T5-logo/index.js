{/* <div class="logo">
    <h2>CodeCamp</h2>
</div> */}

// #1 React : CreateElement
const h2 = React.createElement('h2',null,'CodeCamp')
const logo = React.createElement('div',{className:'logo'},h2)

// #2 ReactDOM : createRoot
const rootDom = document.querySelector('#root')

// #3 ReactDOM : TakeOver for Render Task
const root = ReactDOM.createRoot(rootDom)
root.render(logo)
