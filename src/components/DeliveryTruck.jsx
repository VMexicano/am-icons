import React from 'react';
import DeliveryTruck_ from './../Icons/deliveryTruck.svg';
const DeliveryTruck = (props) => {
  return (
    <img src={DeliveryTruck_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DeliveryTruck;
