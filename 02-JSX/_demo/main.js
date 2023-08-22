console.log("wow");

const age_variable = 20;
const hobby_variable = "Games";
const isMarried = true;
const exp = ["Driver", "Dev", "PM"];
const explist = exp.map((item) => {
  return <li>{item}</li>;
});
const userPets = {
  dog: "Jum-meng",
  cat: "Kai-kao",
};

function myLuckyNumber() {
  return 1 + Math.floor(Math.random() * 10);
}
const styleObj = {
  color: "blue",
  textAlign: "left",
};

const userProfile = (
  <div>
    <h1 className="text-red">FullName : WOW</h1>
    <h4>Age : {age_variable} </h4>
    <h4>Hobby : {hobby_variable}</h4>
    <h4>Is married ? : {isMarried ? "true" : "false"} </h4>
    <h4>Experience : {explist}</h4>
    <h4>PET :</h4>
    <p style={styleObj}>{userPets.dog}</p>
    <p>{userPets.cat}</p>
    <p>My Lucky Number : {myLuckyNumber()}</p>
  </div>
);

const domNode = document.querySelector("#root");
const root = ReactDOM.createRoot(domNode);
root.render(userProfile);
