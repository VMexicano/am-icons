import React from 'react';
import Video_ from './../Icons/video.svg';
const Video = (props) => {
  return (
    <img src={Video_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Video;
