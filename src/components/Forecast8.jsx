import React from 'react';
import Forecast8_ from './../Icons/forecast8.svg';
const Forecast8 = (props) => {
  return (
    <img src={Forecast8_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast8;
