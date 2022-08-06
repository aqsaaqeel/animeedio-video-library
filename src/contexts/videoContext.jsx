import  React  from 'react';
import { createContext, useContext } from 'react';
import { useReducer } from 'react';

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
            return { ...state, allVideos: [ ...action.payload] };
        case "CURRENT_VIDEO":
            return { ...state, singleVideo: { ...action.payload} };
        default:
            return { ...state};
    }
};

const initialVidState = { allVideos : [], singleVideo:{} }

export { VideoProvider, useVideos }