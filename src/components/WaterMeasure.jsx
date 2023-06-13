import React from 'react';
import WaterMeasure_ from './../Icons/waterMeasure.svg';
const WaterMeasure = (props) => {
  return (
    <img src={WaterMeasure_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WaterMeasure;
