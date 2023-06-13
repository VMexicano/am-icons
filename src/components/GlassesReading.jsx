import React from 'react';
import GlassesReading_ from './../Icons/glassesReading.svg';
const GlassesReading = (props) => {
  return (
    <img src={GlassesReading_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default GlassesReading;
