import React from 'react';
import ElectricCar_ from './../Icons/electricCar.svg';
const ElectricCar = (props) => {
  return (
    <img src={ElectricCar_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ElectricCar;
