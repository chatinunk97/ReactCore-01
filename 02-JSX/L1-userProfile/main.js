let fullName;
let birthYear;
// #1 React : JSX

const userProfile = (
  <div className="userProfile">
    <h1>{fullName}</h1>
    <p>{birthYear}</p>
  </div>
);

// #2 ReactDOM : createRoot
const rootDom = document.querySelector("#root");

// #3 ReactDOM : TakeOver for Render Task

const root = ReactDOM.createRoot(rootDom);
const render = (element) => {
  root.render(element);
};

const btn1 = (
  <button
    type="button"
    className = "btn"
    onClick={() => {
      fullName = prompt("Give me your name");
      birthYear = prompt("Gib birth year pls");
      const userProfile = (
        <div className="userProfile">
          <h1>{fullName}</h1>
          <p>{birthYear}</p>
        </div>
      )
      render(userProfile)
    }}
  >
    Click Me!
  </button>
);

render(btn1);
