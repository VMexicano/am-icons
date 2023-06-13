import React from 'react';
import TouchZoomIn_ from './../Icons/touchZoomIn.svg';
const TouchZoomIn = (props) => {
  return (
    <img src={TouchZoomIn_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TouchZoomIn;
