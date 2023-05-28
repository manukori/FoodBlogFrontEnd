import { useState, useEffect } from "react";
import Banner from "./banner";
import axios from "axios";
import Navbar from "./navbar"
import { Link } from "react-router-dom";
import Footer from "./footer";


const Posts = () => {

    let title = "All Posts"

    let [posts, setPosts] = useState([])
    let[loader,setloader]=useState(true)
    useEffect(() => {
        let fetchData = async () => {
            const res = await axios.get("http://localhost:4000/posts")
            const pdata =  res.data
            setPosts(pdata)
            setloader(false)
        }
        fetchData()
    }, [])

    return (
        <div className="main">
            <Navbar/>

            <Banner data={title} />
            <div className="bg ">
            <h1 className="mt-3">All posts</h1>
            <div className="loader">
                {loader && <img  height={"500px"} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="" />}
            </div>
            <div className="posts d-flex flex-wrap my-4">
            
                {posts.map((post) => (
                        <div className="post my-3 mx-3">
                            <img src={post.image} width="300" height="350" alt="" />
                            <div className="d1">
                                <h4>{post.title}</h4>
                                <h2>Name:{post.author}</h2>

                                <Link to={`/posts/${post._id}`} className=" btn btn-warning">Read more</Link>
                            </div>
                            
                        </div>                  
                ))}
            </div>
            </div>
            <h5 className="text-center text-danger">Number of posts:{posts.length}</h5>
            <Footer/>
        </div>
    );
}

export default Posts;

// https://media.istockphoto.com/id/1182393436/vector/fast-food-seamless-pattern-with-vector-line-icons-of-hamburger-pizza-hot-dog-beverage.jpg?s=612x612&w=0&k=20&c=jlj-n_CNsrd13tkHwC7MVo0cGUyyc8YP6wJQdCvMUGw=