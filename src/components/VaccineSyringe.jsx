import React from 'react';
import VaccineSyringe_ from './../Icons/vaccineSyringe.svg';
const VaccineSyringe = (props) => {
  return (
    <img src={VaccineSyringe_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default VaccineSyringe;
