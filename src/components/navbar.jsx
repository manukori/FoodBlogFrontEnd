import { Link } from "react-router-dom";
const Navbar = () => {
    return (    

        <div className="navbar">

        <h2 className="ms-5">Stories</h2>

        <div className="links">
            <Link to={"/homepage"} href="">Home</Link>
            <Link to={'/aboutPage'} href="">About</Link>
            {/* <a href="">Foods</a> */}
            <Link to={"/addpost"} href="">Add Post</Link>
            <Link to={"/posts"} href="">Post</Link>
            {/* <a href="">Lifestyle</a> */}
            {/* <a href="">Contact</a> */}
            <Link to={'/'} href="">Logout</Link>

        </div>

    </div>
     );
}
 
export default Navbar;