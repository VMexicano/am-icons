import React from 'react';
import PowerSymbol_ from './../Icons/powerSymbol.svg';
const PowerSymbol = (props) => {
  return (
    <img src={PowerSymbol_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PowerSymbol;
