import { useState } from "react";
import BlogList from "./BlogList";
 
 
const Home = () => {
 
    const [blogs,setblogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Jackie', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Adam', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Maxky', id: 3 }
    ])
 
    return (
        <div className="home">
          <BlogList blogs={blogs}/>
        </div>
      );
    }
     
export default Home;