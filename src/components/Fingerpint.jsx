import React from 'react';
import Fingerpint_ from './../Icons/fingerpint.svg';
const Fingerpint = (props) => {
  return (
    <img src={Fingerpint_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Fingerpint;
