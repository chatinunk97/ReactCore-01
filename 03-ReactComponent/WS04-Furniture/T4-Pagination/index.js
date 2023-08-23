// #1 Write Your Function Component

const PageButton = (prop)=>{
    return (
        <div className={`pageButton ${prop.type}`}>
            {prop.text}
        </div>
    )
}
const ButtonPannel = ()=>{
    return(
        <div className="buttonPannel">
            <PageButton text='1'/>
            <PageButton text='2'/>
            <PageButton text='3'/>
            <PageButton text='Next' type='nonNumber'/>
        </div>
    )
}

// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<ButtonPannel/>);
