import { createContext, useContext } from "react";
import { useReducer } from "react";

const VideoContext = createContext({});
const useVideos = () => useContext(VideoContext);

const VideoProvider = ({ children }) => {
    const [currVidState, vidDispatch] = useReducer(
        vidReducer,
        initialVidState
    );
    return (
        <VideoContext.Provider value = {{currVidState, vidDispatch}}>
            {children}  
        </VideoContext.Provider>    
    );
};

const vidReducer = (state, action) => {
    switch(action.type){
        case "SHOW_VIDEOS":
            return { ...state, allVideos: action.payload };

        default:
            return { ...state};
    }
};

const initialVidState = { allVideos : [], }

export { VideoProvider, useVideos }