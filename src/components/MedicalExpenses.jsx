import React from 'react';
import MedicalExpenses_ from './../Icons/medicalExpenses.svg';
const MedicalExpenses = (props) => {
  return (
    <img src={MedicalExpenses_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MedicalExpenses;
