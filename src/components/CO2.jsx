import React from 'react';
import CO2_ from './../Icons/cO2.svg';
const CO2 = (props) => {
  return (
    <img src={CO2_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CO2;
