import React from 'react';
import DeliveryTruckClock_ from './../Icons/deliveryTruckClock.svg';
const DeliveryTruckClock = (props) => {
  return (
    <img src={DeliveryTruckClock_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DeliveryTruckClock;
