// import { Link } from "react-router-dom";
import Navbar from "./navbar"
import Footer from "./footer";
import "../styles/home.css"

const Home = () => {
    return (

        <div className="home">
            <Navbar/>

            <div className="part2  d-flex ">
                {/* //align-content-center justify-content-around  */}

                <div className="images ms-3  ">
                    <img height={"600px"} width={"850px"} className=" ms-3" src="https://preview.colorlib.com/theme/stories/images/bg_2.jpg.webp" alt="" />

                    {/* <img src="https://preview.colorlib.com/theme/stories/images/bg_1.jpg.webp" alt="" /> */}
                </div>

                <div className="holdings">

                    <div className="content ms-5 mt-5">
                        <h5 style={{ fontWeight: "normal" }} >FEATURED POSTS</h5>
                        <h1 style={{ fontSize: "40px", fontWeight: "bolder" }} className="">I am A <br />Blogger & I <br /> Love Foods</h1>
                        <h3></h3>

                        <h6 style={{ fontSize: "25px", fontWeight: "lighter", paddingBottom: "25px" }}>A small river named Duden flows <br /> by their place and supplies it with <br /> the necessary regelialia</h6>
                        <button disabled id="readbtn" className="rounded-3 px-4 py-3 bg-black text-light" >Read More   &#8594;</button>

                    </div>

                    <div className="twobutton d-flex">
                        <button disabled id="fbtn">&larr; Forward</button>
                        <button disabled id="sbtn">Next &rarr;</button>
                    </div>
                </div>

            </div>

            <h1 className="ms-5 mt-4 font-underline">Recent Stories</h1>

            <div className="stories ms-5 d-flex">

                <div className="main">

                    <div className="s1 d-flex">

                        <div className="i1 p-4 ">

                            <img height="180px" width="250px" src="https://preview.colorlib.com/theme/stories/images/image_1.jpg.webp" alt="" />
                            <h5>Tasty & Delicious Foods</h5>
                            <a  style={{ textDecoration: "none", color: "orange" }} href="">Read More &#8594;</a>

                        </div>

                        <div className="i1 p-4">
                            <img height="180px" width="250px" src="https://preview.colorlib.com/theme/stories/images/image_3.jpg.webp" alt="" />
                            <h5>Tasty & Delicious Foods <br/>from Scotland</h5>
                            <a style={{ textDecoration: "none", color: "orange" }} href="">Read More &#8594;</a>

                        </div>
                    </div>

                         <div className="s2 d-flex">

                        <div className="i1 p-4">
                            <img height="180px" width="250px" src="https://preview.colorlib.com/theme/stories/images/image_4.jpg.webp" alt="" />
                            <h5>Tasty & Delicious Foods</h5>
                            <a style={{ textDecoration: "none", color: "orange" }} href="">Read More &#8594;</a>

                        </div>

                        <div className="i1 p-4">
                            <img height="180px" width="250px" src="https://preview.colorlib.com/theme/stories/images/image_5.jpg.webp" alt="" />
                            <h5>Tasty & Delicious Foods</h5>
                            <a style={{ textDecoration: "none", color: "orange" }} href="">Read More &#8594;</a>

                        </div>
                    </div>
                </div>

                <div className="s3 p-0">

                    <img className=" ms-5 mt-4" height="490px" width="570px" src="https://preview.colorlib.com/theme/stories/images/image_2.jpg.webp" alt="" />

                </div>
            </div>
            <Footer/>
        </div>


    );
}

export default Home;