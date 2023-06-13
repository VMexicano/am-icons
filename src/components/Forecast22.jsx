import React from 'react';
import Forecast22_ from './../Icons/forecast22.svg';
const Forecast22 = (props) => {
  return (
    <img src={Forecast22_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast22;
