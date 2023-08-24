const productDB = [
    {
        productName: 'iPhone',
        productPrice: 24_000,
        productDes: 'Smart Phone',
    },
    {
        productName: 'HuaWei',
        productPrice: 18_000,
        productDes: 'CH Smart Phone',
    },
]


const Produce = (prop) => {
    console.log(prop.product.a)
    return (
        <>
            <h1>{`${prop.product.a.productName}`}</h1>
            <h2>{`${prop.product.a.productPrice}`}</h2>
            <p>{`${prop.product.a.productDes}`}</p>
        </>
    )
}

const App = () => {
    return (
        <>
            <Produce product={{a : productDB[0]}}/>
            <Produce product={{a : productDB[1]}}/>
            <Produce product={{a : productDB[1]}}/>
        </>
    )
}
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App />)
