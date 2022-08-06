import React, { useState } from "react";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios"; 
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./SingleVideoPage.css"
import { useVideos } from "../../contexts/videoContext";
// import { useFetch } from "../../service/videpApi";
 
 export const SingleVideoPage = () => {
    const { videoId } = useParams();
    const [video, setVideo] = useState({});
    const{url} = video;
    // const { videoInfo } = useFetch(`/api/video/${videoId}`)
    // console.log("hi");
    
    const {currVidState, vidDispatch} = useVideos();
    const {allVideos, singleVideo}  = currVidState;
    console.log(allVideos, singleVideo);

    useEffect(() => {
        (async () => {
          try {
            const {data} = await axios.get(`/api/video/${videoId}`);
            setVideo(data.video);
          } catch (error) {
            console.log("single video error", error);
          }
        })();
      }, [videoId]);
    return(
        <div className="single-video-container">
            <h1 className="vid-heading"><img className ="small-icon" src="https://i.ibb.co/3pxwMfC/single-vid-icon.png" alt="single-vid-icon" border="0"/> Now Playing</h1>
            <ReactPlayer url = {`https://www.youtube.com/embed/${videoId}`} controls= {true}/>
            <h2 className="vid-heading"><Link to ="/listing"><img className ="small-icon" src="https://i.ibb.co/9rwrG6w/goku.png" alt="goku" border="0"/></Link> Watch something else ?</h2>
            <Link to ="/listing"><button className ="hero-button">Explore</button></Link>
        </div>
    )
 }