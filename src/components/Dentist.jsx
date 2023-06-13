import React from 'react';
import Dentist_ from './../Icons/dentist.svg';
const Dentist = (props) => {
  return (
    <img src={Dentist_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Dentist;
