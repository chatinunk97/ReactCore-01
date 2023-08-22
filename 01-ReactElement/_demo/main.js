console.log("TEST")

// ##### Vanilla JS  ##########

// const btn = document.createElement('button');
// btn.innerText = 'cart'

// //Render

// const root = document.querySelector('.root')
// btn.classList.add('red')
// btn.classList.add('bigfont')

// root.appendChild(btn)

// ##### React JS  ##########

//Create Element : React Element
const reactElement = React.createElement('button', {className :['red','bigfont']},'wow')


// Since it's a Virtual DOM we can't just add it
/// We need to use a Library
///// $$ React DOM : Render to Browser $$ ///////
console.log(ReactDOM)
/// We've created React Element with React now we gonna add it//
const domRoot = document.querySelector('.root')

//This is where you let React DOM take over the domRoot
const root = ReactDOM.createRoot(domRoot)

// Render by using this Syntax and adding the React Element in to it
root.render(reactElement)


//////////////////////////////////
//////// Add row to table///////////

arr= [
    {className:'red', onClick:()=>alert("ARR1")},
    {className:'blue', onClick:()=>alert("ARR2")}
]

const th1 = React.createElement('th',arr[0],"Header") 
const th2 = React.createElement('th',null,"Header")
const th3 = React.createElement('th',arr[1],"Header")

const td1 = React.createElement('td',null,"Row # 1") 
const td2 = React.createElement('td',null,"Row # 1")
const td3 = React.createElement('td',null,"Row # 1")



const tr1 = React.createElement('tr',null,th1,th2,th3)

const tr2 = React.createElement('tr',null,td1,td2,td3)




const tbody = React.createElement('tbody',null,tr1,tr2)

const table_element = React.createElement('table',null,tbody)

const tableDom = document.querySelector(".table")
const table = ReactDOM.createRoot(tableDom)
table.render(table_element)

