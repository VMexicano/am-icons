import React from 'react';
import VideoSymbol_ from './../Icons/videoSymbol.svg';
const VideoSymbol = (props) => {
  return (
    <img src={VideoSymbol_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default VideoSymbol;
