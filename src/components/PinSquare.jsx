import React from 'react';
import PinSquare_ from './../Icons/pinSquare.svg';
const PinSquare = (props) => {
  return (
    <img src={PinSquare_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PinSquare;
