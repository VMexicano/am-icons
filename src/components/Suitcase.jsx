import React from 'react';
import Suitcase_ from './../Icons/suitcase.svg';
const Suitcase = (props) => {
  return (
    <img src={Suitcase_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Suitcase;
