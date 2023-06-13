import React from 'react';
import FareClassic_ from './../Icons/fareClassic.svg';
const FareClassic = (props) => {
  return (
    <img src={FareClassic_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FareClassic;
