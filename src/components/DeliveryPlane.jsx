import React from 'react';
import DeliveryPlane_ from './../Icons/deliveryPlane.svg';
const DeliveryPlane = (props) => {
  return (
    <img src={DeliveryPlane_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DeliveryPlane;
