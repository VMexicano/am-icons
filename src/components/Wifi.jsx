import React from 'react';
import Wifi_ from './../Icons/wifi.svg';
const Wifi = (props) => {
  return (
    <img src={Wifi_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Wifi;
