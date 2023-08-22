{
  /* <li class="nav_menu_item">
    <a href="#" class="nav_menu_link">account</a>
</li> */
}

// #1 React : CreateElement
const alink = React.createElement("a", {
  href: "#,",
  className: "nav_menu_link",
},"account");
const list = React.createElement("li", { className: "nav_menu_item" }, alink);

// #2 ReactDOM : createRoot

const rootDom = document.querySelector('#root')

// #3 ReactDOM : TakeOver for Render Task
const root = ReactDOM.createRoot(rootDom)
root.render(list)
