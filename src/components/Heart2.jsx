import React from 'react';
import Heart2_ from './../Icons/heart2.svg';
const Heart2 = (props) => {
  return (
    <img src={Heart2_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Heart2;
