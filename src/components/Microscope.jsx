import React from 'react';
import Microscope_ from './../Icons/microscope.svg';
const Microscope = (props) => {
  return (
    <img src={Microscope_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Microscope;
