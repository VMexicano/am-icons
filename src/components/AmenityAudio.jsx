import React from 'react';
import AmenityAudio_ from './../Icons/amenityAudio.svg';
const AmenityAudio = (props) => {
  return (
    <img src={AmenityAudio_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AmenityAudio;
