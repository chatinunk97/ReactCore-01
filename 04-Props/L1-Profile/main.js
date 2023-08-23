const Profile = (prop) => {
    return (
        <>
            <h1>{`${prop.name}`}</h1>
            <h2>Age{`${prop.age}`}</h2>
        </>

    )
}

const App = ()=>{
    return (
        <>
        <Profile name="John Dor" age = "27"/>
        </>
    )
}
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App/>)
