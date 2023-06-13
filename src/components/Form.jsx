import React from 'react';
import Form_ from './../Icons/form.svg';
const Form = (props) => {
  return (
    <img src={Form_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Form;
