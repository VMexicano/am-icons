import React from 'react';
import InputText_ from './../Icons/inputText.svg';
const InputText = (props) => {
  return (
    <img src={InputText_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default InputText;
