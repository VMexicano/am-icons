import React from 'react';
import Malta_ from './../Icons/malta.svg';
const Malta = (props) => {
  return (
    <img src={Malta_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Malta;
