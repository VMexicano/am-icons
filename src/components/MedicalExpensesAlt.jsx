import React from 'react';
import MedicalExpensesAlt_ from './../Icons/medicalExpensesAlt.svg';
const MedicalExpensesAlt = (props) => {
  return (
    <img src={MedicalExpensesAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MedicalExpensesAlt;
