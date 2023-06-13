import React from 'react';
import RightArrowLight_ from './../Icons/rightArrowLight.svg';
const RightArrowLight = (props) => {
  return (
    <img src={RightArrowLight_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default RightArrowLight;
