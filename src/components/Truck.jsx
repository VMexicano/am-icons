import React from 'react';
import Truck_ from './../Icons/truck.svg';
const Truck = (props) => {
  return (
    <img src={Truck_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Truck;
