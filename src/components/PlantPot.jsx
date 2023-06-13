import React from 'react';
import PlantPot_ from './../Icons/plantPot.svg';
const PlantPot = (props) => {
  return (
    <img src={PlantPot_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PlantPot;
