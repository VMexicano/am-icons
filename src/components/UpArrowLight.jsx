import React from 'react';
import UpArrowLight_ from './../Icons/upArrowLight.svg';
const UpArrowLight = (props) => {
  return (
    <img src={UpArrowLight_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default UpArrowLight;
