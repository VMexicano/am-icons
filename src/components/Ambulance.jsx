import React from 'react';
import Ambulance_ from './../Icons/ambulance.svg';
const Ambulance = (props) => {
  return (
    <img src={Ambulance_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Ambulance;
