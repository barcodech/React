import { useNavigate } from "react-router-dom";
import { useState } from "react";
 
const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const navigate= useNavigate();
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
 
 	fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // navigate(-1);
      navigate('/');
    })
   }
 
 
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Adam">Adam</option>
          <option value="Jackie">Jackie</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
}
 
export default Create;