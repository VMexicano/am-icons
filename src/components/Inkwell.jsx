import React from 'react';
import Inkwell_ from './../Icons/inkwell.svg';
const Inkwell = (props) => {
  return (
    <img src={Inkwell_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Inkwell;
