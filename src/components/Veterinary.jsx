import React from 'react';
import Veterinary_ from './../Icons/veterinary.svg';
const Veterinary = (props) => {
  return (
    <img src={Veterinary_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Veterinary;
