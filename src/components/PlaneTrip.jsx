import React from 'react';
import PlaneTrip_ from './../Icons/planeTrip.svg';
const PlaneTrip = (props) => {
  return (
    <img src={PlaneTrip_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PlaneTrip;
