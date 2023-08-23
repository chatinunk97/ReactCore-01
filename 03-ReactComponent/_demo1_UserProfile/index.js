// JSX Only

const userProfile = (
  <div className="profile_card">
    <h1>FullName : JohnDoe</h1>
    <h2>Age : 30 </h2>
  </div>
);

//Component
// 2 ways of creating component

///// 1. Function Component (since 2018) /////
/// A Function that returns JSX
const UserProfile = () => {
  return (
    <div className="profile_card">
      <h1>FullName : WOW1</h1>
      <h2>Age : 30 </h2>
    </div>
  );
};

//// 2. Class Component (OG version)   /////

/////////// appComponent //////////////
// const appComponent = (
//   <>
//     <UserProfileComponent />
//   </>
// );

function App(){
    return (<div>
        <UserProfile />
    </div>)
}

// #2 ReactDOM : createRoot
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<App></App>);
