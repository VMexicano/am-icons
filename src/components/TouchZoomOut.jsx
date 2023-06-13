import React from 'react';
import TouchZoomOut_ from './../Icons/touchZoomOut.svg';
const TouchZoomOut = (props) => {
  return (
    <img src={TouchZoomOut_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TouchZoomOut;
