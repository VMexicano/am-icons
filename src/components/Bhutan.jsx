import React from 'react';
import Bhutan_ from './../Icons/bhutan.svg';
const Bhutan = (props) => {
  return (
    <img src={Bhutan_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Bhutan;
