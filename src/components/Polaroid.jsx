import React from 'react';
import Polaroid_ from './../Icons/polaroid.svg';
const Polaroid = (props) => {
  return (
    <img src={Polaroid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Polaroid;
