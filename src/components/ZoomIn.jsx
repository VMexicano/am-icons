import React from 'react';
import ZoomIn_ from './../Icons/zoomIn.svg';
const ZoomIn = (props) => {
  return (
    <img src={ZoomIn_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ZoomIn;
