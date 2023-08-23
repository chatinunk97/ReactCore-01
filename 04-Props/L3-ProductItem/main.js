const productDB = [
    {
        productName: 'iPhone',
        productPrice: 24_000,
        productDes : 'Smart Phone',
    }
]


const Produce = (prop)=>{
    return (
        <>
        <h1>{`${prop.name}`}</h1>
        <h2>{`${prop.price}`}</h2>
        <p>{`${prop.des}`}</p>
        </>
    )
}

const App = ()=>{
    return(
        <>
        <Produce name={productDB[0].productName} price={productDB[0].productPrice} des={productDB[0].productDes}/> 
        </>
    )
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App/>)

