import React from 'react';
import TouchDoubleTap_ from './../Icons/touchDoubleTap.svg';
const TouchDoubleTap = (props) => {
  return (
    <img src={TouchDoubleTap_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TouchDoubleTap;
