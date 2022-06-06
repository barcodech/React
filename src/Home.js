import { useState } from "react";
 
const Home = () => {
  // let name = 'Jackie';
  const [name, setName] = useState('Jackie');
  const [age, setAge] = useState(20);
 
  const handleClick = () => {
    // name = 'Adam';
    setName('Adam');
    setAge(40);
  }
 
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
 
export default Home;