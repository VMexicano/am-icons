import React from 'react';
import CarTunnel_ from './../Icons/carTunnel.svg';
const CarTunnel = (props) => {
  return (
    <img src={CarTunnel_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CarTunnel;
