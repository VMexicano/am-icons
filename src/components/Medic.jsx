import React from 'react';
import Medic_ from './../Icons/medic.svg';
const Medic = (props) => {
  return (
    <img src={Medic_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Medic;
