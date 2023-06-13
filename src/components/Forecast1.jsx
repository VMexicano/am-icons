import React from 'react';
import Forecast1_ from './../Icons/forecast1.svg';
const Forecast1 = (props) => {
  return (
    <img src={Forecast1_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast1;
