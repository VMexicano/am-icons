import React from 'react';
import PlantPot1_ from './../Icons/plantPot1.svg';
const PlantPot1 = (props) => {
  return (
    <img src={PlantPot1_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PlantPot1;
