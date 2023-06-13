import React from 'react';
import BottomArrowLight_ from './../Icons/bottomArrowLight.svg';
const BottomArrowLight = (props) => {
  return (
    <img src={BottomArrowLight_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BottomArrowLight;
