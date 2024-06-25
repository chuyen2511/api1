import React from "react";
import './video.css'
import PlayVideo from "../../components/phayVideo/playVideo";
import Recommended from "../../components/Recommended/Recommended";
import { useParams } from "react-router-dom";
const Video =()=>{
    // useParams có thể lấy tham số từ URL
        const {videoID,categoryID} = useParams();
        console.log(videoID, categoryID); 
    return(
        <div className="play-container">
            <PlayVideo videoID = {videoID}/>
            <Recommended/>
        </div>
    );
};

export default Video;