import { Link,useNavigate } from "react-router-dom";
import "../styles/signin.css"
import { useRef } from "react";
import axios from "axios";



const Signin = () => {
    let navigate =useNavigate()

    let email=useRef(null)
    let password= useRef(null)

    let signIn=(e)=>{
        e.preventDefault()
        let data={
            email:email.current.value,
            password:password.current.value
        }

        axios.post('http://localhost:4000/signin', data)
        .then((res)=>{
            alert(res.data.message)  //message froem backend
            if (res.data.message =='Login successfully') {
                navigate('/homepage')
            }
        })
    }


    return (
        <div className="signin ">
        <div id="signinn" className="signin-form d-flex   justify-content-center ">
        <div className="image col-6 ">
                    <img style={{height:"350px",marginLeft: "-200px"}} src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg" alt="" /> <br />
                    <Link to={"/sign-up"} style={{marginLeft:"-200px"}} className="btn text-decoration-underline align-items-center justify-content-center my-4" href="">Create an account</Link>
                </div>

            <div className="form">
                <form action="">
                    <h1 style={{fontFamily:"poppins",marginLeft:"-90px"}} >Sign In</h1>
                    <div className="Email d-flex  ">
                        <img style={{height:"20px",marginTop:"13px"}} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTSyxQdbd9UkSA6j4xE6yFmAI_E7hps1dzVL19cWOmvqGnOCDe1" alt="" />
                        <input  type="text" ref={email}  placeholder="Enter Email" className="shadow-none"  />
                    </div>

                    <div className="Password d-flex my-2">
                        <img style={{height:"20px",marginTop:"14px"}} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6Dq75O54mNUsXDH4ZMhOXkdiT4i5XCzUNGr1cNTNs4VHmKUlu" alt="" />
                        <input type="password" ref={password}  placeholder="Password" className="" />
                    </div>

                    <div style={{marginLeft:"-70px"}} className="term d-flex align-item-center my-3 justify-content-center">
                        <input style={{margin:"0px 10px 0px -15px"}}  type="checkbox" />
                        <p  className=" my-1">Remember me</p>
                    </div>
                    <div  className="button">
                       <button onClick={signIn} type="submit" style={{marginLeft:"-120px",padding:"10px 25px",borderRadius:"5px",backgroundColor:"#6dabe4",color:'white'}} className="btn  btn-smlg" >Log in</button>
                    </div>
                </form>
            </div>
        </div>







        <div className="or d-flex align-item-center" >
                    <p style={{marginRight:"20px"}}>Or login with</p>
                    <div className="link">
                    <a href="https://www.facebook.com/login/">
                        <img style={{height:"30px"}} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSLGBf4y11vExJh9GrFlV-_LNzT33WQdc7upgp8P2E7x8y5DdCX"/>
                    </a>
                    <a href="https://twitter.com/i/flow/login">
                        <img style={{height:"30px"}} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTeolE5Kh66XXB7KZzrPrrVGOsQ11TdfM6hQyIgkTyS7QFJQnxW"/>
                    </a>
                    <a href="https://accounts.google.com/v3/signin/identifier?dsh=S1208169542%3A1681383553585878&continue=http%3A%2F%2Fsupport.google.com%2Fmail%2Fanswer%2F8494%3Fhl%3Den%26co%3DGENIE.Platform%253DDesktop&ec=GAZAdQ&hl=en&ifkv=AQMjQ7S8Wbx2YMerTE5mNEpy4fLokH2Dyhz2mOuZXVp7qdHTL0BLEvyC_Y1IbyYg7RsaUS2_40eg3A&passive=true&sjid=7742185457963698190-AP&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                        <img style={{height:"30px"}} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSvsvws7YlDDy6aXoyv4vrUCKaNLwr22LcQ4g_INcfwaPN1FGGU"/>
                    </a>
                    </div>
                </div>
    </div> 
    );
}
 
export default Signin;