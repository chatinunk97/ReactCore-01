// #1 React : CreateElement
const Hero = ()=>{
    return (
        <img src="./image.png"></img>
    )
}


const App = ()=>{
    return (
        <>
        <Hero/>
        </>
    )
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<App/>)
