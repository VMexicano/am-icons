import React from 'react';
import Fiji_ from './../Icons/fiji.svg';
const Fiji = (props) => {
  return (
    <img src={Fiji_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Fiji;
