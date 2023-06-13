import React from 'react';
import Forecast4_ from './../Icons/forecast4.svg';
const Forecast4 = (props) => {
  return (
    <img src={Forecast4_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast4;
