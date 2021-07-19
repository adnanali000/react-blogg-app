const CreateBlog = () => {
    return ( 
        <div className="blogForm">
            <h2>Add New Blog</h2>
            <form>
                <label>Blog title: </label>
                <input type="text" required />

                <label>Blog body: </label>
                <textarea required></textarea>

                <label>Blog author: </label>
                <select>
                    <option value="adnan">Adnan</option>
                    <option value="arnan">Adnan Ali</option>
                </select>
                <button>Add blog</button>
            </form>
        </div>
     );
}
 
export default CreateBlog;