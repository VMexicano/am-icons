import React from 'react';
import InputSelectOptions_ from './../Icons/inputSelectOptions.svg';
const InputSelectOptions = (props) => {
  return (
    <img src={InputSelectOptions_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default InputSelectOptions;
