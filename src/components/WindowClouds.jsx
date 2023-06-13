import React from 'react';
import WindowClouds_ from './../Icons/windowClouds.svg';
const WindowClouds = (props) => {
  return (
    <img src={WindowClouds_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WindowClouds;
