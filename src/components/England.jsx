import React from 'react';
import England_ from './../Icons/england.svg';
const England = (props) => {
  return (
    <img src={England_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default England;
