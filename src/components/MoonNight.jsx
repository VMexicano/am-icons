import React from 'react';
import MoonNight_ from './../Icons/moonNight.svg';
const MoonNight = (props) => {
  return (
    <img src={MoonNight_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MoonNight;
