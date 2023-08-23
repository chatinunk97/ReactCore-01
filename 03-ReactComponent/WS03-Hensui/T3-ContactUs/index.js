// #1 Write Your Function Component
const MailInput = ()=>{
    return (
        <input type='text' placeholder ='e-mail' ></input>
    )
}
const Submit = ()=>{
    return (
        <button type="submit">Submit</button> 
    )
}

const App = ()=>{
    return(
        <>
        <MailInput/>
        <Submit/>
        </>
    )
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task

root.render(<App />)
