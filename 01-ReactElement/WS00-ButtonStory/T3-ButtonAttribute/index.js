// #1 React : CreateElement

// const attribute = {
//     className:'btn',
//     onClick : ()=>{
//         alert("wow")
//     }
// }

const btn = React.createElement('button',
{
className:'btn bigFont',
// className:'bigFont',
role:"button",
type:"submit",
onClick:()=>alert("Successfully Register")
},
"Register")

// #2 ReactDOM : createRoot
const rootDom = document.querySelector('#root')
// #3 ReactDOM : TakeOver for Render Task
const root = ReactDOM.createRoot(rootDom)
root.render(btn)


