import Lottie from "react-lottie"
import "./Hero.css"
import animation from "../../lottie-hero.json"
export function Hero() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
           preserveAspectRatio: "xMidYMid slice",
        },
     };
    return (
        <div className="hero-content-area" >
            
            <div className="lottie-hero-container">
                <Lottie options = {defaultOptions} height = {500} width ={500} ></Lottie>
            </div>
            <text className="hero-heading-lottie">Immerse yourself in the world of Anime</text>
            <div className="hero-buttons">
                <div className="watch-button">
                    <a href ="./listing"><button className ="hero-button">Watch Now</button></a>
                </div>
                <div className="watch-button">
                    <button className ="hero-button">Login</button>
                </div>
            </div>                
        </div>
    )
}