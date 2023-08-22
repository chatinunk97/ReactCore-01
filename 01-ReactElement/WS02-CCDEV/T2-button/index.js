// Target HTMLAllCollection
// <div class="btn_wrapper">
//     <button class="btn view_more_btn">view all pages</button>
//     <button class="btn documentation_btn">documentation</button>
// </div>


// #1 React : CreateElement
const btn1 = React.createElement('button',
{
    className : 'btn view_more_btn'
},"view all")
const btn2 = React.createElement('button',
{
    className : 'btn documentation_btn'
},"documentation")


const divWrapper = React.createElement('div',{className:'btn_wrapper'},btn1,btn2)

// #2 ReactDOM : createRoot


// #3 ReactDOM : TakeOver for Render Task
const rootDom = document.querySelector('#root')
const root = ReactDOM.createRoot(rootDom)
root.render(divWrapper)
