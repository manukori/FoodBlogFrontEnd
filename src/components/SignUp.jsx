import { Link,Navigate, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import "../styles/signup.css"
import axios from 'axios';

//axious is alternate for fetch


const Signup = () => {

  let navigate=useNavigate()
    
let name=useRef(null)
let email=useRef(null)
let password=useRef(null)
let reenter=useRef(null)

let handelsubmit=(e)=>{
  e.preventDefault()

    let data={
        name:name.current.value,
        email:email.current.value,
        password:password.current.value,
        reenter:reenter.current.value
    }
    // console.log(data);
    if (data.name && data.email && data.password &&(data.password ==data.reenter)) {
        axios.post('http://localhost:4000/signup', data)
        .then((res)=>{
            alert(res.data.message) //message form backend
            navigate('/')   //navigate to signin page
        })
    } else {
        alert("invalid Credentials")
        
    }
}


// Using useState

  // let [name, setname] = useState("")
    // let [email, setemail] = useState("")
    // let [pwd, setpwd] = useState("")
    // let [rpwd, setrpwd] = useState("")


    // let handleSubmit = (e) => {

    //     e.preventDefault()

    //     let data = { name, email, pwd, rpwd }
    // console.log(data);
    // console.log(data.name , data.email , data.pwd);

    //     if (data.name && data.email && data.pwd && (data.pwd == data.rpwd)) {
    //         axios.post('http://localhost:4000/signup', data)
    //             .then((res) => {
    //                 alert(res.data.message) //message from backend
    //                 navigate('/') //navigate to signIn page
    //             })
    //     } else {
    //         alert("Invalid Credentials")
    //     }
    // }



    return ( 
    <div className="signup ">
        <div id="signupp" className="signup-form d-flex justify-content-center ">
            <div className="form ">
                <form action="" > 
                    <h1 style={{fontFamily:"poppins",marginLeft:"-160px"}}>Sign Up</h1>

                    <div className="name d-flex ">
                    <img style={{height:"20px",marginTop:"20px"}} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTSyxQdbd9UkSA6j4xE6yFmAI_E7hps1dzVL19cWOmvqGnOCDe1" alt="" />
                        <input ref={name} type="text"placeholder="Username" className="" />
                    </div>

                    <div className="Email d-flex my-2">
                        <img style={{height:"16px",marginTop:"20px"}} src="https://cdn-icons-png.flaticon.com/512/52/52221.png" alt="" />
                        <input ref={email} type="text"placeholder="Enter Email" className=""  />
                    </div>

                    <div className="Password d-flex my-2">
                    <img style={{height:"15px",marginTop:"20px"}} src="https://cdn-icons-png.flaticon.com/512/102/102288.png" alt="" />
                        <input ref={password} type="password"placeholder="Password" className="" />
                    </div>

                    <div className="Re-enter d-flex">
                    <img style={{height:"22px",marginTop:"20px"}} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6Dq75O54mNUsXDH4ZMhOXkdiT4i5XCzUNGr1cNTNs4VHmKUlu" alt="" />
                        <input ref={reenter} type="password"placeholder="Repeat your Password" className="" />
                    </div>
                    

                    <div className="term d-flex align-item-center my-4 justify-content-center">
                        <input style={{margin:"0px 10px 0px 5px"}} type="checkbox" />
                        <p className=" my-1">I agree all statements in <span style={{textDecoration:"underline",cursor:"pointer"}}>Terms of service</span></p> 
                    </div>
                    <div  className="button">
                     <button onClick={handelsubmit}  style={{marginLeft:"-190px",padding:"10px 25px",borderRadius:"5px",backgroundColor:"#6dabe4",color:'white'}} className="btn  btn-smlg">Register</button>
                         
                        {/* <a href="/" className="btn btn-primary btn-lg my-3" >Register</a> */}
                    </div>
                </form>
            </div>
            <div className="image col-6 ">
                    <img style={{height:"320px",margin: "5px 150px"}} src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt="" />
                    <Link to={"/"} style={{marginLeft:"200px"}} className="btn text-decoration-underline  " href="">I am already a member</Link>
                </div>
        </div>
    </div> );
}
 
export default Signup