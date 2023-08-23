// #1 Write Your Function Component

const SearchBar = () => {
    return (
        <input type="text"></input>
    )
}
const SearchIcon = () => {
    return (
        <>
        <img src="https://www.svgrepo.com/show/532551/search-alt-1.svg"></img>
        </>

    )
}

const Search = () => {
    return (
        <div className="searchBar">
            <SearchBar />
            <SearchIcon />
        </div>
    )
}

// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<Search />);
