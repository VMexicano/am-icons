import React from 'react';
import Forecast19_ from './../Icons/forecast19.svg';
const Forecast19 = (props) => {
  return (
    <img src={Forecast19_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast19;
