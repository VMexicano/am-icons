import React from 'react';
import CheckBoxThin_ from './../Icons/checkBoxThin.svg';
const CheckBoxThin = (props) => {
  return (
    <img src={CheckBoxThin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CheckBoxThin;
