import  React from 'react';

// import Lottie from "react-lottie"
import "./Hero.css"
// import animation from "../../lottie-hero.json"
export function Hero() {
    // useEffect(() => {
    //     const defaultOptions = {
    //         loop: true,
    //         autoplay: true,
    //         animationData: animation,
    //         rendererSettings: {
    //            preserveAspectRatio: "xMidYMid slice",
    //         },
    //      };
    // }, [])
    
    return (
        <div className="hero-content-area" >
            
            <div className="lottie-hero-container">
            <img class="hero-img" src="https://i.ibb.co/ZJh92rn/kindergartenteacher3-0053446gtwsdc.png" alt="kindergartenteacher3-0053446gtwsdc" border="0"/>
            {/* <Lottie options = {defaultOptions} height = {500} width ={500} ></Lottie> */}
            </div>
            <text className="hero-heading-lottie">Immerse yourself in the world of Anime</text>
            <div className="hero-buttons">
                <div className="watch-button">
                    <a href ="./listing"><button className ="hero-button">Watch Now</button></a>
                </div>
                <div className="watch-button">
                <a href ="./login"><button className ="hero-button">Login</button></a>
                </div>
            </div>                
        </div>
    )
}