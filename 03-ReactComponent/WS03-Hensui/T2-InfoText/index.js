// #1 Write Your Function Component

const Info = ()=>{
    return (<p>
        Welcome to Hensui, the newest addition to the vibrant Los Angeles dining scene! Our restaurant is dedicated to bringing you the most authentic and delicious Japanese cuisine.
<br />
Stay tuned for our grand opening date, sign up with your e-mail address to get notified. 
    </p>)
}

const App =()=>{
    return(
        <>
        <Info />
        </>
    )
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task

root.render(<App />)
