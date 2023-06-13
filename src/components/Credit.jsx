import React from 'react';
import Credit_ from './../Icons/credit.svg';
const Credit = (props) => {
  return (
    <img src={Credit_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Credit;
