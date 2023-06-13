import React from 'react';
import Teeth_ from './../Icons/teeth.svg';
const Teeth = (props) => {
  return (
    <img src={Teeth_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Teeth;
