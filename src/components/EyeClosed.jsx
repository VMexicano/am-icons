import React from 'react';
import EyeClosed_ from './../Icons/eyeClosed.svg';
const EyeClosed = (props) => {
  return (
    <img src={EyeClosed_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default EyeClosed;
