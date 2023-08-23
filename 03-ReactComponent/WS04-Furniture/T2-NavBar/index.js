// #1 Write Your Function Component

const LinkNav = (props)=>{
    return (
        <li>
            <a href="#">{props.text}</a>
        </li>
    )
}


const NavBar = ()=>{
    return (
        <div className = "navBar">
            <LinkNav text="Home"/>
            <LinkNav text="Shop"/>
            <LinkNav text="About"/>
            <LinkNav text="Contact"/>
        </div>
    )
}


// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<NavBar></NavBar>);
