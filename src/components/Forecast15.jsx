import React from 'react';
import Forecast15_ from './../Icons/forecast15.svg';
const Forecast15 = (props) => {
  return (
    <img src={Forecast15_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast15;
