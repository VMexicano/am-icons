import React from 'react';
import Nurse_ from './../Icons/nurse.svg';
const Nurse = (props) => {
  return (
    <img src={Nurse_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Nurse;
