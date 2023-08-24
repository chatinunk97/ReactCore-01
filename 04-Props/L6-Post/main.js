const arrayPost = [
    { id: 1, message: "Have you heard of Joh ?", date: "23 Aug 2023", poster: "ymd" , profilePic : "http://m.gettywallpapers.com/wp-content/uploads/2023/07/Pfp-Boku-no-Kokoro-no-Yabai-Yatsu.jpg"},
    { id: 2, message: "Joe Who ?", date: "24 Aug 2023", poster: "boss", profilePic:"https://thicc-af.mywaifulist.moe/waifus/kyoutarou-ichikawa/ih4skkexhyaeoxUL6YKpU2KvbJRJl5KZBVx2cV2t.jpg?class=thumbnail" },
    { id: 3, message: "JOE MAMA!!!", date: "24 Aug 2023", poster: "ymd" , profilePic : "https://i.pinimg.com/1200x/26/98/96/2698969af0bda55ea1ab09435e08182f.jpg" },
    { id: 4, message: "草 ", date: "24 Aug 2023", poster: "ymd",profilePic : "https://i.pinimg.com/736x/73/8f/2b/738f2b38918ace61f69bbd1351d0fc26.jpg" },
]

const ShowPost = (prop) => {
    return (
        <div className="post">
            <div className="left">
                <p>Post ID : {`${prop.post.id}`}</p>
                <h3>{`${prop.post.message}`}</h3>
                <p>Post By : {`${prop.post.poster}`} <br></br> Date : {`${prop.post.date}`} </p>
            </div>
            <div className="right">
                <img src={`${prop.post.profilePic}`}></img>
            </div>
        </div>
    )
}

const App = () => {
    return (
        <div className="postList">
            <h1>Post List</h1>
            {arrayPost.map((item)=><ShowPost post={item}/>)}
        </div>
    )
}
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App />)
