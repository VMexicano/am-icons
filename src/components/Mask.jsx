import React from 'react';
import Mask_ from './../Icons/mask.svg';
const Mask = (props) => {
  return (
    <img src={Mask_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Mask;
