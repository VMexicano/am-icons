import React from 'react';
import Minus_ from './../Icons/minus.svg';
const Minus = (props) => {
  return (
    <img src={Minus_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Minus;
