import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The New Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/createblog" style={{
                    // backgroundColor:'lightgray',
                    // borderRadius:'8px',
                    // color:'white'
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;