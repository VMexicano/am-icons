import React from 'react';
import Medal_ from './../Icons/medal.svg';
const Medal = (props) => {
  return (
    <img src={Medal_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Medal;
