import React from 'react';
import Hotels1_ from './../Icons/hotels1.svg';
const Hotels1 = (props) => {
  return (
    <img src={Hotels1_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Hotels1;
