const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

let modeDark = true;
let mode="";
const BtnMode = ()=>{
  return (
    <button className="mode"
    onClick = {()=>{
      if(modeDark){
        mode = 'light'
        modeDark=false;
      }
      else{
        mode='dark'
        modeDark=true;
      }
      root.render([<BtnMode/>,<App mode={mode}/>])}}
    >Dark Mode / Light Mode</button>
  )
}

const ListRender = (prop) => {
  return (
    <>
      <li>
      <label className="form-control">
        <input type="checkbox"/>
        {`${prop.name}`}
        </label>
        <br></br>
      </li>
    </>
  );
};

const taskList = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5", "Task 5", "Task 5", "Task 5", "Task 5", "Task 5", "Task 5"];

// const Input = () => {
//   return (
//     <div className="inputForm">
//       <input type="text" />
//       <input
//         type="submit"
//         value="Submit"
//         onClick={() =>
//           root.render(
//             <>
//               <Input />
//               {taskList.map((item) => (
//                 <ListRender name={item} />
//               ))}
//             </>
//           )
//         }
//       />
//     </div>
//   );
// };

const App = (prop) => {
  return (
    <>
      <div className={`container ${prop.mode}`} >
        <div className="header">
        <h1>Tasks</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Cartoon_space_rocket.png"></img>
        </div>
        <div className="noteBox">
          <p>Notes : </p>
        </div>
        <hr/>
        <div className="taskList">
          {taskList.map((item) => (
            <ListRender name={item} />
          ))}
        </div>
      </div>
    </>
  );
};

root.render([<BtnMode/>,<App mode="dark"/>]);
