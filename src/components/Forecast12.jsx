import React from 'react';
import Forecast12_ from './../Icons/forecast12.svg';
const Forecast12 = (props) => {
  return (
    <img src={Forecast12_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast12;
