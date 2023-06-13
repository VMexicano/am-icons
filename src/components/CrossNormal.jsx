import React from 'react';
import CrossNormal_ from './../Icons/crossNormal.svg';
const CrossNormal = (props) => {
  return (
    <img src={CrossNormal_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CrossNormal;
