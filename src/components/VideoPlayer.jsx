import React from 'react';
import VideoPlayer_ from './../Icons/videoPlayer.svg';
const VideoPlayer = (props) => {
  return (
    <img src={VideoPlayer_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default VideoPlayer;
