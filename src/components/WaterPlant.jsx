import React from 'react';
import WaterPlant_ from './../Icons/waterPlant.svg';
const WaterPlant = (props) => {
  return (
    <img src={WaterPlant_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WaterPlant;
