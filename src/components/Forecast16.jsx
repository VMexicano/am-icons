import React from 'react';
import Forecast16_ from './../Icons/forecast16.svg';
const Forecast16 = (props) => {
  return (
    <img src={Forecast16_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast16;
