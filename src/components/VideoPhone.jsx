import React from 'react';
import VideoPhone_ from './../Icons/videoPhone.svg';
const VideoPhone = (props) => {
  return (
    <img src={VideoPhone_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default VideoPhone;
