import React from 'react';
import Forecast6_ from './../Icons/forecast6.svg';
const Forecast6 = (props) => {
  return (
    <img src={Forecast6_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast6;
