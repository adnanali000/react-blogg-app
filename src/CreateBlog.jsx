import {useState} from 'react';

const CreateBlog = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('adnan');

    return ( 
        <div className="blogForm">
            <h2>Add New Blog</h2>
            <form>
                <label>Blog title: </label>
                <input type="text" 
                value = {title}
                onChange={(e)=>setTitle(e.target.value)}  
                required />

                <label>Blog body: </label>
                <textarea
                onChange={(e)=>setBody(e.target.value)}
                required></textarea>

                <label>Blog author: </label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="adnan">Adnan</option>
                    <option value="adnan ali">Adnan Ali</option>
                </select>
                <button>Add blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default CreateBlog;