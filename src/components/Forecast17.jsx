import React from 'react';
import Forecast17_ from './../Icons/forecast17.svg';
const Forecast17 = (props) => {
  return (
    <img src={Forecast17_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast17;
