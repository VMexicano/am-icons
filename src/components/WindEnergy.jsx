import React from 'react';
import WindEnergy_ from './../Icons/windEnergy.svg';
const WindEnergy = (props) => {
  return (
    <img src={WindEnergy_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WindEnergy;
