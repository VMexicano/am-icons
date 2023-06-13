import React from 'react';
import RightLarge_ from './../Icons/rightLarge.svg';
const RightLarge = (props) => {
  return (
    <img src={RightLarge_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default RightLarge;
