import React from 'react';
import Forecast32_ from './../Icons/forecast32.svg';
const Forecast32 = (props) => {
  return (
    <img src={Forecast32_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast32;
