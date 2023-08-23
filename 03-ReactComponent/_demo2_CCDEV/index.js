//App component's children app

// Logo Component
const Logo = () => {
  return (
    <div className="logo">
      <h2>CodeCamp</h2>
    </div>
  );
};
//Nav Menu
const NavMenu = () => {
  return (
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
  );
};
//Header Component
const Header = () => {
  return (
    <header className="container header">
      <nav className="nav">
        {/*Logo*/}
        <Logo />
        {/*NavMenu*/}
        <NavMenu />
      </nav>
    </header>
  );
};
//Hero Component
const Hero = (
  link = "https://steamuserimages-a.akamaihd.net/ugc/102854222206494318/AB778D775315077593BCBE34195D632EB7515F66/?imw=1024&imh=575&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
) => {
  return (
    <section className="wrapper">
      <div className="container">
        <div className="grid-cols-2">
          <div className="grid-item-1">
            <h1 className="main-heading">
              Welcome to <span>CodeCamp</span>
              <br />
              Develop anything.
            </h1>
            <p className="info-text">
              Build a beautiful, modern website with flexible components built
              from scratch.
            </p>
            <div className="btn_wrapper">
              <button className="btn view_more_btn">view all pages</button>
              <button className="btn documentation_btn">documentation</button>
            </div>
          </div>
          <div className="grid-item-2">
            <div className="team_img_wrapper">
              <img src={link} alt="team-photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

//App Component

const App = (name = "") => {
  let link;
  if (name.toLowerCase() === "yamada") {
    link =
      "https://media.tenor.com/0KcrdmzDBvoAAAAC/anna-yamada-boku-no-kokoro-no-yabai-yatsu.gif";
  } else {
    link =
      "https://steamuserimages-a.akamaihd.net/ugc/102854222206494318/AB778D775315077593BCBE34195D632EB7515F66/?imw=1024&imh=575&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true";
  }
  return (
    <>
      <Header />
      {Hero(link)}
      {Hero()}
      <Hero />
      <h1>App Ja</h1>
    </>
  );
};

// #2 ReactDOM : createRoot
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
// root.render(App(""));
const btn = <button type="button" onClick={()=>root.render(App("yamada"))} className="btn">Yamada</button> 
const btn2 = <button type="button" onClick={()=>root.render(App(""))} className="btn">Shinoa</button> 
const app1 = 
<>
{btn}{btn2}
</>
root.render(app1)

