import React from 'react';
import Forecast5_ from './../Icons/forecast5.svg';
const Forecast5 = (props) => {
  return (
    <img src={Forecast5_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast5;
