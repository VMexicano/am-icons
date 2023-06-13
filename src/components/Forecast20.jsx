import React from 'react';
import Forecast20_ from './../Icons/forecast20.svg';
const Forecast20 = (props) => {
  return (
    <img src={Forecast20_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast20;
