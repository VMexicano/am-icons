import React from 'react';
import Forecast30_ from './../Icons/forecast30.svg';
const Forecast30 = (props) => {
  return (
    <img src={Forecast30_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast30;
