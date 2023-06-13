import React from 'react';
import ElectrictyTower_ from './../Icons/electrictyTower.svg';
const ElectrictyTower = (props) => {
  return (
    <img src={ElectrictyTower_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ElectrictyTower;
