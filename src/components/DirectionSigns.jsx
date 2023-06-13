import React from 'react';
import DirectionSigns_ from './../Icons/directionSigns.svg';
const DirectionSigns = (props) => {
  return (
    <img src={DirectionSigns_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DirectionSigns;
