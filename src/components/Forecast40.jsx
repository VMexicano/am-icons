import React from 'react';
import Forecast40_ from './../Icons/forecast40.svg';
const Forecast40 = (props) => {
  return (
    <img src={Forecast40_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast40;
