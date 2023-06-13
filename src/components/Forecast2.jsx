import React from 'react';
import Forecast2_ from './../Icons/forecast2.svg';
const Forecast2 = (props) => {
  return (
    <img src={Forecast2_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast2;
