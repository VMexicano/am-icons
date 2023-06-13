import React from 'react';
import Forecast23_ from './../Icons/forecast23.svg';
const Forecast23 = (props) => {
  return (
    <img src={Forecast23_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast23;
