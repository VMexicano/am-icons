import React from 'react';
import Changes_ from './../Icons/changes.svg';
const Changes = (props) => {
  return (
    <img src={Changes_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Changes;
