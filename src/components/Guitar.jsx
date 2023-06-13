import React from 'react';
import Guitar_ from './../Icons/guitar.svg';
const Guitar = (props) => {
  return (
    <img src={Guitar_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Guitar;
