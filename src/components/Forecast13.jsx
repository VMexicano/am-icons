import React from 'react';
import Forecast13_ from './../Icons/forecast13.svg';
const Forecast13 = (props) => {
  return (
    <img src={Forecast13_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast13;
