import React from 'react';
import LeafCar_ from './../Icons/leafCar.svg';
const LeafCar = (props) => {
  return (
    <img src={LeafCar_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LeafCar;
