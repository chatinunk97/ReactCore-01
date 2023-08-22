{/* <ul class="nav_menu_list">

    <li class="nav_menu_item">
        <a href="#" class="nav_menu_link">account</a>
    </li>


    <li class="nav_menu_item">
        <a href="#" class="nav_menu_link">about</a>
    </li>


    <li class="nav_menu_item">
        <a href="#" class="nav_menu_link">service</a>
    </li>

    
    <li class="nav_menu_item">
        <a href="#" class="nav_menu_link">contact</a>
    </li>
</ul> */}



// #1 React : CreateElement
const a1 = React.createElement
('a',{ href:"#", className:"nav_menu_link"},'account')
const a2 = React.createElement
('a',{ href:"#", className:"nav_menu_link"},'about')
const a3 = React.createElement
('a',{ href:"#", className:"nav_menu_link"},'service')
const a4 = React.createElement
('a',{ href:"#", className:"nav_menu_link"},'contact')


const li1 = React.createElement('li',{className:"nav_menu_item"},a1)
const li2 = React.createElement('li',{className:"nav_menu_item"},a2)
const li3 = React.createElement('li',{className:"nav_menu_item"},a3)
const li4 = React.createElement('li',{className:"nav_menu_item"},a4)
const ul = React.createElement('ul',{className:"nav_menu_list"},li1,li2,li3,li4)

// #2 ReactDOM : createRoot

const rootDom = document.querySelector('#root')

// #3 ReactDOM : TakeOver for Render Task
const root = ReactDOM.createRoot(rootDom)
root.render(ul)
