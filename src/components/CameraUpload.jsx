import React from 'react';
import CameraUpload_ from './../Icons/cameraUpload.svg';
const CameraUpload = (props) => {
  return (
    <img src={CameraUpload_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CameraUpload;
