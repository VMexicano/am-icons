import React from 'react';
import LeftArrowLight_ from './../Icons/leftArrowLight.svg';
const LeftArrowLight = (props) => {
  return (
    <img src={LeftArrowLight_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LeftArrowLight;
