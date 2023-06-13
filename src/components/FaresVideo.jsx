import React from 'react';
import FaresVideo_ from './../Icons/faresVideo.svg';
const FaresVideo = (props) => {
  return (
    <img src={FaresVideo_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FaresVideo;
