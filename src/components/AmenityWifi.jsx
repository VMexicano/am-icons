import React from 'react';
import AmenityWifi_ from './../Icons/amenityWifi.svg';
const AmenityWifi = (props) => {
  return (
    <img src={AmenityWifi_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AmenityWifi;
