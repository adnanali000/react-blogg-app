const BlogList = ({blogs,title,handleDelete}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
             {blogs.map((item)=>(
                <div className="blog-preview" key={item.id}>
                    <h2>{item.title}</h2>
                    <p>Written by {item.autor}</p>
                    <button onClick={()=>handleDelete(item.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;