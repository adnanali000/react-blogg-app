import {useState} from 'react';
import { useHistory } from 'react-router-dom';

const CreateBlog = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('adnan');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const submitHandler = (e)=>{
        e.preventDefault();
        const blog = {title,body,author};

        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers: {'Content-Type':"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            // console.log('new blog added');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        })

    }

    return ( 
        <div className="blogForm">
            <h2>Add New Blog</h2>
            <form onSubmit={submitHandler}>
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
                { !isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog..</button>}
            </form>
        </div>
     );
}
 
export default CreateBlog;