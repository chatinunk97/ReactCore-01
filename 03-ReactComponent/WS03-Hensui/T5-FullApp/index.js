// #1 React : CreateElement

///Header
const Header = () => {
  return (
    <h1>
      Discover authentic
      <br /> Japanese cuisine in LA.
      <br /> Opening Soon!
    </h1>
  );
};
const Nav = () => {
  return (
    <div className="navBar">
      <li>
        <a href="#">
          <img
            className="icon"
            src="https://www.svgrepo.com/show/512399/instagram-167.svg"
          ></img>
        </a>
      </li>
      <li>
        <a href="#">
          <img
            className="icon"
            src="https://www.svgrepo.com/show/513008/twitter-154.svg"
          ></img>
        </a>
      </li>
    </div>
  );
};

///Info
const Info = () => {
  return (
    <p>
      Welcome to Hensui, the newest addition to the vibrant Los Angeles dining
      scene! Our restaurant is dedicated to bringing you the most authentic and
      delicious Japanese cuisine.
      <br /><br />
      Stay tuned for our grand opening date, sign up with your e-mail address to
      get notified.
    </p>
  );
};
///Contact Us
const ContactUs = () => {
  return (
    <div className="contactUs">
      <input type="text" placeholder="e-mail"></input>
      <button type="submit">Submit</button>
    </div>
  );
};

const Hero = () => {
  return <img className="coverPic" src="../T4-Hero/image.png"></img>;
};
const App = () => {
  return (
    <div className="app">
      {/*LEFT BOX */}
      <div className="leftBox">
        <Hero />
      </div>

      {/*Right BOX */}
      <div className="rightBox">
        <div className="rightUpper">
          <Nav />
        </div>

        <div className="rightLower">
          <Header />
          <Info />
          <ContactUs />
        </div>
      </div>
    </div>
  );
};
// #2 ReactDOM : createRoot
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<App />);
