const persons = [
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

  "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

  "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",

];
const persons2 = [
    "https://i.pinimg.com/1200x/26/98/96/2698969af0bda55ea1ab09435e08182f.jpg",

    "https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-6/271884366_453940333055214_920482299967983299_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF2zzycUU-h6frxYclgIyc9IpJ7mJsafdIiknuYmxp90tn8OFAaYeFVUwPOiUOFRkZP5WIc7RWPAFJwYMLsxBkE&_nc_ohc=o8q4ffB3OU0AX9KkKKy&_nc_ht=scontent.fbkk7-2.fna&oh=00_AfC-ceRGlEgWjyfmUoYpe4nfSvk6i8tswI5YtxaW0OToCg&oe=64EAF51B",

    "https://thicc.mywaifulist.moe/waifus/67/facb39ba06055d082d2cf00b9177761ef367542f3d61fe012da55bc7d2c2b0b3_thumb.jpg",

    "https://thicc.mywaifulist.moe/waifus/77/c6e299aeafe2cac6d3de800a581c889fbe17df52a39dbadd3b9f9e986648430f_thumb.jpg",
  ];

const Avatar = (prop) => {
  return (
    <div className="avatar">
      <img className="avatar__img" src={`${prop.src}`} alt={`${prop.alt}`} onClick={prop.onClick}/>
    </div>
  );
};

const peopleLists=[
  {id:1,
    name:'ymd', 
    src  :  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
  {id:2,
    name:'bro2', 
    src : "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
  {id:3,
    name:'bro3', 
    src : "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
  {id:4,
    name:'bro4', 
    src : "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"},
]

console.log(peopleLists.map((item)=>(
  <Avatar alt={item.name} src={item.src}/>
)))


const App = () => {
  return (
  <div className='container'>




    {peopleLists.map((item)=>(
      <Avatar alt={item.name}/>
    ))}

    
  {/* {persons.map(name=><Avatar src={name}/>)} */}
  </div>
  )
};

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App/>);
