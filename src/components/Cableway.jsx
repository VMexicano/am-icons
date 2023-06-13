import React from 'react';
import Cableway_ from './../Icons/cableway.svg';
const Cableway = (props) => {
  return (
    <img src={Cableway_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Cableway;
