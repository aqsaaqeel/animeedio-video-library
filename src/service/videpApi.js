import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (link) =>{
    const [videoInfo, setVideoInfo] = useState([]);
    useEffect(
        () => 
        {
            const getData = async () => {
                try{
                    const response = await axios.get(link);
                    if(response.status === 200){
                        setVideoInfo(response.data.videos);
                    }
                } catch (error){
                    console.log("Error occured " + error)
                }
            };
            getData();
        }, [link]);
    return {videoInfo,};
}

export { useFetch };