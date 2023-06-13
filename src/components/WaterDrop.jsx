import React from 'react';
import WaterDrop_ from './../Icons/waterDrop.svg';
const WaterDrop = (props) => {
  return (
    <img src={WaterDrop_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WaterDrop;
