import React from 'react';
import Mouse_ from './../Icons/mouse.svg';
const Mouse = (props) => {
  return (
    <img src={Mouse_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Mouse;
