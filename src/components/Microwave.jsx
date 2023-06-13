import React from 'react';
import Microwave_ from './../Icons/microwave.svg';
const Microwave = (props) => {
  return (
    <img src={Microwave_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Microwave;
