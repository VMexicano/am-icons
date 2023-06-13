import React from 'react';
import VideoPresentation_ from './../Icons/videoPresentation.svg';
const VideoPresentation = (props) => {
  return (
    <img src={VideoPresentation_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default VideoPresentation;
