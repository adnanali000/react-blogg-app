import { useState} from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs,setBlogs] = useState([
        {title:'My New Website',body:'lorem ipsum....',autor:'adnan',id:1},
        {title:'Web dev top tips',body:'lorem ipsum....',autor:'faham',id:2},
        {title:'Welcome party',body:'lorem ipsum....',autor:'waseem',id:3},
    ])

    const handleDelete = (id)=>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="content">
           <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
           {/* <BlogList blogs = {blogs.filter((blog)=> blog.autor === "adnan")} title="Adnan's Blogs" /> */}
        </div>
     );
}
 
export default Home;