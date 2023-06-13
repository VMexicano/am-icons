import React from 'react';
import Camera_ from './../Icons/camera.svg';
const Camera = (props) => {
  return (
    <img src={Camera_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Camera;
