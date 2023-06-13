import React from 'react';
import CrossCircle_ from './../Icons/crossCircle.svg';
const CrossCircle = (props) => {
  return (
    <img src={CrossCircle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CrossCircle;
