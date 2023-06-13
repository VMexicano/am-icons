import React from 'react';
import WaterCoke_ from './../Icons/waterCoke.svg';
const WaterCoke = (props) => {
  return (
    <img src={WaterCoke_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WaterCoke;
