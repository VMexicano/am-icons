import React from 'react';
import Forecast18_ from './../Icons/forecast18.svg';
const Forecast18 = (props) => {
  return (
    <img src={Forecast18_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast18;
