import React from 'react';
import WaterTap_ from './../Icons/waterTap.svg';
const WaterTap = (props) => {
  return (
    <img src={WaterTap_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WaterTap;
