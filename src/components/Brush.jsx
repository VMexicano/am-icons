import React from 'react';
import Brush_ from './../Icons/brush.svg';
const Brush = (props) => {
  return (
    <img src={Brush_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Brush;
