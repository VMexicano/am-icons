import React from 'react';
import LocationGPS_ from './../Icons/locationGPS.svg';
const LocationGPS = (props) => {
  return (
    <img src={LocationGPS_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LocationGPS;
