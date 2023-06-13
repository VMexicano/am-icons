import React from 'react';
import Forecast3_ from './../Icons/forecast3.svg';
const Forecast3 = (props) => {
  return (
    <img src={Forecast3_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast3;
