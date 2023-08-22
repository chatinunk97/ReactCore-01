{/* <section class="wrapper">
    <div class="container">
        <!-- grid-box -->
        <div class="grid-cols-2">
            <!-- left -->
            <div class="grid-item-1">
                <!-- TASK-3 :HEADING -->
                <!-- TASK-1 :INFO-->
                <!-- TASK-2 :BTN -->
            </div>

            <!-- right -->
            <div class="grid-item-2">
                <!-- TASK4:Hero-Image -->
            </div>
        </div>
    </div>
</section> */}

// #1 React : CreateElement


///3
const span = React.createElement('span',null,"Codecamp.")
const br = React.createElement('br',null)
const mainHeading = React.createElement('h1',{className:'main-heading'},"Welcome to ",span,br,'Develop anything.')

///1
const pr = React.createElement('p',null,br,'Build a beautiful, modern website with flexible components built from scratch.')
///
///2
const btn1 = React.createElement('button',
{
    className : 'btn view_more_btn'
},"view all")
const btn2 = React.createElement('button',
{
    className : 'btn documentation_btn'
},"documentation")

const divWrapper = React.createElement('div',{className:'btn_wrapper'},btn1,btn2)
const gridsub1 = React.createElement('div',{className:"grid-item-1"},mainHeading,pr,divWrapper)
/////////////////
const image = React.createElement('img',
{
    src:"https://img.freepik.com/free-vector/team-business-people-putting-hands-up-together_74855-19906.jpg?w=1380&amp;t=st=1692544217~exp=1692544817~hmac=6253a9b25f1f86e30715b25c4b736446b802dc9bd3c4990c9ffa640f327f1f04",
    alt:"team-photo"
})

const teamImg = React.createElement('div',{className : "team_img_wrapper"},image)

const gridsub2 = React.createElement('div',{className:"grid-item-2"},teamImg)
//////////////////
const grid = React.createElement('div',{className:"grid-cols-2"},gridsub1,gridsub2)
const container = React.createElement('div',{className:'container'},grid)
const section = React.createElement('section',{className:'wrapper'},container)



////header/////
// const a1 = React.createElement
// ('a',{ href:"#", className:"nav_menu_link"},'account')
// const a2 = React.createElement
// ('a',{ href:"#", className:"nav_menu_link"},'about')
// const a3 = React.createElement
// ('a',{ href:"#", className:"nav_menu_link"},'service')
// const a4 = React.createElement
// ('a',{ href:"#", className:"nav_menu_link"},'contact')

// const li1 = React.createElement('li',{className:"nav_menu_item"},a1)
// const li2 = React.createElement('li',{className:"nav_menu_item"},a2)
// const li3 = React.createElement('li',{className:"nav_menu_item"},a3)
// const li4 = React.createElement('li',{className:"nav_menu_item"},a4)
// const ul = React.createElement('ul',{className:"nav_menu_list"},li1,li2,li3,li4)

//FN creating NAV
function createNAV(...text){
    result = text.reduce((acc,item)=>{
        const anchorTag = React.createElement('a',{ href:"#", className:"nav_menu_link"},item)
        acc.push(React.createElement('li',{className:"nav_menu_item"},anchorTag))
        return acc
    },[])
    return result
}
const list = createNAV('account','about','service','contact');
const ul = React.createElement('ul',{className:"nav_menu_list"},...list)


const h2 = React.createElement('h2',null,'Devkit')
const logo = React.createElement('div',{className:'logo'},h2)

const nav_menu = React.createElement('div',{
    className:"nav_menu",
     id:"nav_menu"
},ul)

const nav = React.createElement('nav',{className:'nav'},logo,nav_menu)
const header = React.createElement('header',{
    className :"container header"
},nav)

const main = React.createElement('main',null,header,section)


// #2 ReactDOM : createRoot

// #3 ReactDOM : TakeOver for Render Task
const rootDom = document.querySelector('#root')
const root = ReactDOM.createRoot(rootDom)
root.render(main)
