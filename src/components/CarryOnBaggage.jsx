import React from 'react';
import CarryOnBaggage_ from './../Icons/carryOnBaggage.svg';
const CarryOnBaggage = (props) => {
  return (
    <img src={CarryOnBaggage_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CarryOnBaggage;
