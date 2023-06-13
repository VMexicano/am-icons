import React from 'react';
import CameraImage_ from './../Icons/cameraImage.svg';
const CameraImage = (props) => {
  return (
    <img src={CameraImage_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CameraImage;
