// #1 React : JSX

const headerComponent = (
  <header className="container header">
    <nav className="nav">
      <div className="logo">
        <h2>CodeCamp</h2>
      </div>
      <div className="nav_menu" id="nav_menu">
        <ul className="menu_list">
          <li className="nav_menu_item">
            <a href="#" className="nav_menu_link">
              account
            </a>
          </li>
          <li className="nav_menu_item">
            <a href="#" className="nav_menu_link">
              about
            </a>
          </li>
          <li className="nav_menu_item">
            <a href="#" className="nav_menu_link">
              service
            </a>
          </li>
          <li className="nav_menu_item">
            <a href="#" className="nav_menu_link">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

const heroComponent = (
  <section class="wrapper">
    <div class="container">
      <div class="grid-cols-2">
        <div class="grid-item-1">
          <h1 class="main-heading">
            Welcome to <span>CodeCamp</span>
            <br />
            Develop anything.
          </h1>
          <p class="info-text">
            Build a beautiful, modern website with flexible components built
            from scratch.
          </p>
          <div class="btn_wrapper">
            <button class="btn view_more_btn">view all pages</button>
            <button class="btn documentation_btn">documentation</button>
          </div>
        </div>
        <div class="grid-item-2">
          <div class="team_img_wrapper">
            <img src="https://i.ibb.co/YkbPPn3/team.png" alt="team-photo" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// #2 ReactDOM : createRoot

const rootDom = document.querySelector("#root");
const appComponent = (
  <>
    {headerComponent}
    {heroComponent}
  </>
);

// #3 ReactDOM : TakeOver for Render Task
const root = ReactDOM.createRoot(rootDom);
root.render(appComponent);
