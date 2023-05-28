import { useState,useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar"
import Footer from "./footer";

const Singlepost = () => {
    let [post,setpost]=useState([])
    let [loader, setloader]=useState(true)
    let params=useParams()

     useEffect(()=>{
        let fetchData =async ()=>{
            const response = await axios.get(`http://localhost:4000/posts/${params.id}`)
            const Postdata = response.data
            setpost(Postdata)
            setloader(false)
        }
        fetchData()
    },[])
    return ( 
    <div className="singlepost">
        <Navbar/>
        <div className="loader">
            {loader && <img height={"500px"} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="" />}
            </div>
        <div  className="posts  d-flex">
            <img className="ms-4 mt-4"  height={"500px"} width={"400px"} src={post.image} alt="" />
            <div className="pos">
            <h1 className="mt-4" style={{textDecoration:"underline 2.5px "}} >{post.title}</h1>
            <h4 style={{textAlign:"justify",margin:"0px 10px 0px 10px"}} >{post.summary}</h4>
            <iframe className="mt-5" height={"300px"} width={"400px"} src={post.location} frameborder="0"></iframe>
            </div>
        </div>
        <Link to={'/posts'} className=" btn btn-dark"> back to posts</Link> 
        <Footer/>
    </div>
     );
}
 
export default Singlepost;