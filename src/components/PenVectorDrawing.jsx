import React from 'react';
import PenVectorDrawing_ from './../Icons/penVectorDrawing.svg';
const PenVectorDrawing = (props) => {
  return (
    <img src={PenVectorDrawing_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PenVectorDrawing;
