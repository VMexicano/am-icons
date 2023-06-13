import React from 'react';
import Train_ from './../Icons/train.svg';
const Train = (props) => {
  return (
    <img src={Train_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Train;
