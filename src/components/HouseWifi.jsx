import React from 'react';
import HouseWifi_ from './../Icons/houseWifi.svg';
const HouseWifi = (props) => {
  return (
    <img src={HouseWifi_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HouseWifi;
