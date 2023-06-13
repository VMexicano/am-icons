import React from 'react';
import CarOptionType_ from './../Icons/carOptionType.svg';
const CarOptionType = (props) => {
  return (
    <img src={CarOptionType_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CarOptionType;
