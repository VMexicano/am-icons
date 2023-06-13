import React from 'react';
import Forecast24_ from './../Icons/forecast24.svg';
const Forecast24 = (props) => {
  return (
    <img src={Forecast24_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast24;
