import React from 'react';

const VideoCard = ({ info }) => {

  if (!info) {
    return <div>No data available</div>;
  }

  const { snippet, statistics } = info;


  if (!snippet) {
    return <div>No snippet data available</div>;
  }

  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-64 shadow-lg rounded-md'>
      <img alt='thumbnail' src={thumbnails?.medium?.url} />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
