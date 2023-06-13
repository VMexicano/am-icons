import React from 'react';
import Camper_ from './../Icons/camper.svg';
const Camper = (props) => {
  return (
    <img src={Camper_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Camper;
