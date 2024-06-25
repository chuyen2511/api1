import React, { useEffect, useState } from "react";
import './playVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY,value_converter } from "../../data";
import moment from "moment";



const PlayVideo =({videoID})=>{
    const [channelData, setChannelData] = useState(null)
    const [apiData,setApiData] = useState(null)
    const [commentData,setCommentData] = useState([])
    const fetchVideoData = async () =>{


        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=${API_KEY}`
        await fetch(videoDetails_url)
        .then(res=>res.json())
        .then(data =>setApiData(data.items[0]))
    }
    const fetchOtherData = async () =>{
            const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
            await fetch(channelData_url)
            .then(res=>res.json())
            .then(data=>setChannelData(data.item[0]))

        //comment
        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoID}&key=${API_KEY}`
        await fetch(comment_url)
        .then(res=>res.json())
        .then(data=>setCommentData(data.item))
    }
    useEffect(()=>{
        fetchVideoData();
    },[])

    useEffect(()=>{
        fetchOtherData();
    },[apiData])
    
    return(
        <div className="play-video">
            {/* {<video src={video1} controls autoPlay muted></video>} */}
            {/* mã nhúng từ youtube */}
            <iframe  src={`https://www.youtube.com/embed/${videoID}?autoplay=1` } frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>{apiData?apiData.snippet.title:" title here"}</h3>
            <div className="play-video-info">
                <p>{apiData?value_converter(apiData.statistics.viewCount):" "} &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():" "}</p>
                <div>
                
                    <span><img src={like} />{apiData?value_converter(apiData.statistics.likeCount):" "}</span>
                    <span><img src={dislike} /></span>
                    <span><img src={share} />share</span>
                    <span><img src={save} />save</span>
                </div>
            </div>
            <hr/>
            <div className="publisher">
                <img src={channelData?channelData.items.snippet.thumbnails.default.url:""}/>
            <div>
                <p>{apiData?apiData.snippet.channelTitle:"Channel"}</p>
                <span>{channelData?channelData.statistics.subscriberCount:'1'} Subscribers</span>
            </div>
            <button>Subscriber</button>
            </div>    
            <div className="video-description">
                <p>
                {apiData?apiData.snippet.description.slice(0,250):"Description here"}
                </p>
                <hr/>
                <h4>{apiData?value_converter(apiData.statistics.commentCount):"0"} comments</h4>
                {commentData.map((item,index)=>{

                    return(
                        <>
                        <div key={index} className="comments">
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
                            <div>
                                <h3> chuyen tran  <span>1 day ago</span></h3>
                                <p>uầy a Độp chơi rust lại rồii, tôi 
                                xem mấy pro nươc ngoài mà thích game này vãi
                                </p>
                                <div className="comments-action">
                                    <img src={like}/>
                                    <span>250</span>
                                    <img src={dislike}/>
                                    <span>250</span>
                                </div>
                            </div>
                        </div></>
                    )
                })}
                
                
            </div>
        </div>
    );
};

export default PlayVideo;