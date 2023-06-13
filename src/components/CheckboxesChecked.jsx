import React from 'react';
import CheckboxesChecked_ from './../Icons/checkboxesChecked.svg';
const CheckboxesChecked = (props) => {
  return (
    <img src={CheckboxesChecked_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CheckboxesChecked;
