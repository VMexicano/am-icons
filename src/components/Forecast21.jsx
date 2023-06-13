import React from 'react';
import Forecast21_ from './../Icons/forecast21.svg';
const Forecast21 = (props) => {
  return (
    <img src={Forecast21_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast21;
