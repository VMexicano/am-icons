import React from 'react';
import SolarEnergy_ from './../Icons/solarEnergy.svg';
const SolarEnergy = (props) => {
  return (
    <img src={SolarEnergy_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SolarEnergy;
