import './App.css';

function App() {
const title = 'Welcome to React app';
const num = 100;
const link = 'https://www.google.com';
//const people = {name: 'Barcode',age:10};

  return (
    <div className="App">
      <div className="content">
       <h1>{title}</h1>
       <h2>{num}</h2>
       <a href={link}>Google</a>
       
       <p>{100}</p>
       <p>{"Hello"}</p>
       <p>{[1,2,3,4,5]}</p>
       <p>{Math.floor(Math.random()*5)}</p>

      </div>
    </div>
  );
}

export default App;