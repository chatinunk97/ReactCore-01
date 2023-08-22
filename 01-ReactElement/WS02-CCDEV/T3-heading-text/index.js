{/* <h1 class="main-heading">

    Welcome to 

    <span>Codecamp.</span><br />
    Develop anything.
</h1> */}


// #1 React : CreateElement
const span = React.createElement('span',null,"Codecamp.")
const br = React.createElement('br',null)

const mainHeading = React.createElement('h1',{className:'main-heading'},"Welcome to ",span,br,'Develop anything.')

// #2 ReactDOM : createRoot

const rootDom = document.querySelector('#root')

// #3 ReactDOM : TakeOver for Render Task

const root = ReactDOM.createRoot(rootDom)
root.render(mainHeading)
