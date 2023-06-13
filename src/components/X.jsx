import React from 'react';
import X_ from './../Icons/x.svg';
const X = (props) => {
  return (
    <img src={X_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default X;
