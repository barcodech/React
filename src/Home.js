const Home = () => {
   
    const click1 = (e) => {
      console.log('hello', e );
    }
 
    const click2 = (name, e) => {
      console.log('hello ' + name, e);
    }
 
    return (
      <div className="home">
        <h2>Homepage</h2>
        <button onClick={()=>click1('mama')}>Click me</button>
        <button onClick={(e) => click2('mario', e)}>Click me again</button>
      </div>
    );      
  }
   
  export default Home;