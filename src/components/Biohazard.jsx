import React from 'react';
import Biohazard_ from './../Icons/biohazard.svg';
const Biohazard = (props) => {
  return (
    <img src={Biohazard_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Biohazard;
