import React from 'react';
import InputCursor_ from './../Icons/inputCursor.svg';
const InputCursor = (props) => {
  return (
    <img src={InputCursor_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default InputCursor;
