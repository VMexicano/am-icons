import React from 'react';
import CityLamp_ from './../Icons/cityLamp.svg';
const CityLamp = (props) => {
  return (
    <img src={CityLamp_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CityLamp;
