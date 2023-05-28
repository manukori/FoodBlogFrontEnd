import { useEffect, useRef, useState } from "react";
import axios from "axios"
import "../styles/addpost.css"
import Banner from "./banner";
import Navbar from "./navbar"
import Footer from "./footer";

const Addpost = () => {
    let title=useRef()
    let summary=useRef()
    let image=useRef()
    let author=useRef()
    let location=useRef() 

    let addpost=(e)=>{
        e.preventDefault()
        let data={
            title:title.current.value,
            summary:summary.current.value,
            image:image.current.value,
            author:author.current.value,
            location:location.current.value}

        if (data.title==""&& data.summary=="" && data.location=="") {
             alert('please fill all the forms')
        } else {
         axios.post('http://localhost:4000/addpost',data)
         .then((res)=>{
            alert(res.data.message)
         })   .catch((err)=>{
            alert(err.data.message)
         })
        }
        // alert('hiiii')
    }


    let [names,setname]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            const nam=await axios.get("http://localhost:4000/signup")

            const data1=await nam.data
            console.log(data1.name);

            setname(data1)
        }
        fetchData()
    },[])
    let title2="Add Post"
 

    return (
        
        <div className="addpost">
            <Navbar/>
            <Banner data={title2}/>
            <div className="forms d-flex">

                {/* <div className="image">
                    <img className="ms-5 mt-5" height="680px" width="550px" src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg" alt="" />

                </div> */}

                <div id="form" className="form w-25 ms-5" >
                        {/* <h1>{names[1].name}</h1> */}
                    <h1 className="mb-2 mt-5">ADD POST</h1>

                    <form action="">
                       
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <div id="s1" class="mb-3 ms-5">
                            <input type="text"  ref={author}  class="ps-3 my-1 w-100 " id="exampleFormControlInput1234" placeholder="Enter Name" />
                        </div>


                        <label for="exampleFormControlInput1" class="form-label">Title</label>
                        <div id="s1" class="mb-3 ms-5 ">
                            <input type="text"  ref={title} class="ps-3 my-1 w-100 " id="exampleFormControlInput1" placeholder="Title of the Post" />
                        </div>

                        <label for="exampleFormControlTextarea1" class="form-label">Summary</label>
                        <div id="s1" class="mb-3 ms-5">
                            <textarea class="ps-3 my-1 form-control  w-100  "  ref={summary} id="exampleFormControlTextarea1"></textarea>
                        </div>

                        <label for="exampleFormControlInput1" class="form-label">Image</label>
                        <div id="s1" class="mb-3 ms-5">
                            <input type="text" name="image" ref={image} class="ps-3 my-1 w-100 " id="exampleFormControlInput1" placeholder="Image of the post" />
                        </div>

                        <label for="exampleFormControlInput1" class="form-label">Location</label>
                        <div id="s1" class="mb-3 ms-5">
                            <input type="text"  ref={location} class="ps-3 my-1 w-100 " id="exampleFormControlInput1" placeholder="Location of the post" />
                        </div>

                        <div className="button">
                            <button onClick={addpost} type="submit" className="btn  btn-warning bg-warning m-1">Submit Post</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Addpost;