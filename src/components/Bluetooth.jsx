import React from 'react';
import Bluetooth_ from './../Icons/bluetooth.svg';
const Bluetooth = (props) => {
  return (
    <img src={Bluetooth_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Bluetooth;
