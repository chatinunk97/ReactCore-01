const productDB = [
    {
        productName: 'iPhone',
        productPrice: 24_000,
        productDes: 'Smart Phone',
    }
]


const Produce = (prop) => {
    console.log(prop)
    return (
        <>
            <h1>{`${prop.product[0]}`}</h1>
            <h2>{`${prop.product[1]}`}</h2>
            <p>{`${prop.product[2]}`}</p>
        </>
    )
}

const App = () => {
    return (
        <>
            <Produce product={[
                productDB[0].productName,
                productDB[0].productPrice,
                productDB[0].productDes]}/>
        </>
    )
}
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App />)
