import React from 'react';
import "./ListingPage.css"
import { VideoCard } from "../../components/VideoCard/VideoCard.jsx"
import { useEffect } from "react";
import { useFetch } from "../../service/videpApi.js";
import { useVideos } from "../../contexts/videoContext.jsx";
export const ListingPage = () => {
  const {videoInfo} = useFetch("/api/videos")
  const {currVidState, vidDispatch} = useVideos();
  const {allVideos, singleVideo} = currVidState;
  console.log(allVideos, singleVideo)
  useEffect(() => {
    vidDispatch({type: "SHOW_VIDEOS", payload: videoInfo});
  }, [videoInfo, vidDispatch]);
  return (
    <div className="listing-page-container">
      {allVideos.map((vidItem) =><VideoCard videoItem = {vidItem} />)}
    </div>
  );
};
