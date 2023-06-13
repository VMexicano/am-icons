import React from 'react';
import LeftLarge_ from './../Icons/leftLarge.svg';
const LeftLarge = (props) => {
  return (
    <img src={LeftLarge_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LeftLarge;
