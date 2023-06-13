import React from 'react';
import Grapes_ from './../Icons/grapes.svg';
const Grapes = (props) => {
  return (
    <img src={Grapes_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Grapes;
