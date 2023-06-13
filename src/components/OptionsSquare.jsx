import React from 'react';
import OptionsSquare_ from './../Icons/optionsSquare.svg';
const OptionsSquare = (props) => {
  return (
    <img src={OptionsSquare_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default OptionsSquare;
