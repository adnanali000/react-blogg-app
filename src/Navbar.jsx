const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The New Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/createBlog" style={{
                    // backgroundColor:'lightgray',
                    // borderRadius:'8px',
                    // color:'white'
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;