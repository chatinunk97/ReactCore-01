const quotes = [
    {
        quote: 'The only sin is ignorance',
        source: 'Christopher Marlowe',
    },
    {
        quote: 'A man is his own easiest dupe, for what he wishes to be true he generally believes to be true',
        source: 'Demosthenes',
    },
    {
        quote: 'A lie can travel halfway around the world while the truth is putting on its shoes',
        source: 'Mark Twain',
    },
    {
        quote: 'Great minds discuss ideas; average minds discuss events; small minds discuss people',
        source: 'Eleanor Roosevelt',
    },
    {
        quote: 'If you have a garden and a library, you have everything you need',
        source: 'Marcus Tullius Cicero',
    },
    {
        quote: 'Truth comes out in wine',
        source: 'Pliny the Elder',
    },
    {
        quote: 'Everything in the universe is within you. Ask all from yourself',
        source: 'Rumi',
    },
    {
        quote: 'When I get a little money I buy books; and if any is left I buy food and clothes',
        source: 'Desiderius Erasmus',
    },
];

//0 attr <MyComponent/> === MyComponent() /// It will return a React Component
// 1+ attr <MyComponent text="prop1" text2="prop2"...> === MyComponent(prop)

// function MyCard(props){
//     return (
//         <div className='card'>
//             <h3>{props.quote}</h3>
//             <p>{props.author || "Unknown"}</p>
//         </div>
//     )
// }

function MyCard2(...a){
  
    const set = a.reduce((acc,item)=>{
    acc.push(<div className='card'><h3>{item.quote}</h3><p>{item.author}</p></div>)
    return acc
    },[])
    return set
}
// 
function App(){
    return (
        <div className="container">
           < MyCard2 quote = {quotes[1].quote} author = {quotes[1].source} />
            {/* <MyCard quote = {quotes[0].quote} author = {quotes[0].source}/>
            <MyCard quote = {quotes[1].quote} author = {quotes[1].source}/>
            <MyCard quote = {quotes[2].quote} author = {quotes[2].source}/>
            <MyCard quote = {quotes[3].quote} author = {quotes[3].source}/>
            <MyCard quote = {quotes[4].quote} author = {quotes[4].source}/>
            <MyCard quote = {quotes[5].quote} author = {quotes[5].source}/>
            <MyCard quote = {quotes[6].quote} author = {quotes[20]?.source}/> */}

        </div>
    )
}


// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
