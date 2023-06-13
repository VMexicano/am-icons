import React from 'react';
import Forecast7_ from './../Icons/forecast7.svg';
const Forecast7 = (props) => {
  return (
    <img src={Forecast7_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast7;
