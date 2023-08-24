const friendList = ['ymd', 'mek', 'boss']


const FriendList = (prop) => {
    console.log(prop)
    return (
        <>
            <h2>{`${prop.friend}`}</h2>
        </>
    )
}

const App = () => {
    return (
        <>
            <h1>My Friend List</h1>
        {friendList.map((item)=><FriendList friend={item}/>)}
        </>
    )
}
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App />)
