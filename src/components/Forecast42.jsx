import React from 'react';
import Forecast42_ from './../Icons/forecast42.svg';
const Forecast42 = (props) => {
  return (
    <img src={Forecast42_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast42;
