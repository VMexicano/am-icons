import React from 'react';
import Forecast11_ from './../Icons/forecast11.svg';
const Forecast11 = (props) => {
  return (
    <img src={Forecast11_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast11;
