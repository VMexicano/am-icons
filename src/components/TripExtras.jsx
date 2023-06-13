import React from 'react';
import TripExtras_ from './../Icons/tripExtras.svg';
const TripExtras = (props) => {
  return (
    <img src={TripExtras_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TripExtras;
