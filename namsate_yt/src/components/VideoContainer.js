import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../Utils/constant';
import VideoCard from './VideoCard';


const VideoContainer = () => {
  const [videos, setvideos] = useState([]);
  useEffect(()=>{
    getVideos();
  },[])
  const getVideos = async ()=>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    console.log(json.items);
    setvideos(json.items);
  }
  return (
    <div className='flex flex-wrap'>
      {videos.map((video) => (
      <VideoCard key={video.id} info={video} />
    ))}
      </div>
  )
}

export default VideoContainer
