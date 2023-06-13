import React from 'react';
import Canvas_ from './../Icons/canvas.svg';
const Canvas = (props) => {
  return (
    <img src={Canvas_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Canvas;
