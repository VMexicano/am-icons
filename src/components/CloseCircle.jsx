import React from 'react';
import CloseCircle_ from './../Icons/closeCircle.svg';
const CloseCircle = (props) => {
  return (
    <img src={CloseCircle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CloseCircle;
