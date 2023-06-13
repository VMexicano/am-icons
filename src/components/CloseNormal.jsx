import React from 'react';
import CloseNormal_ from './../Icons/closeNormal.svg';
const CloseNormal = (props) => {
  return (
    <img src={CloseNormal_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CloseNormal;
