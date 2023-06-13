import React from 'react';
import Aircon_ from './../Icons/aircon.svg';
const Aircon = (props) => {
  return (
    <img src={Aircon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Aircon;
