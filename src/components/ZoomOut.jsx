import React from 'react';
import ZoomOut_ from './../Icons/zoomOut.svg';
const ZoomOut = (props) => {
  return (
    <img src={ZoomOut_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ZoomOut;
