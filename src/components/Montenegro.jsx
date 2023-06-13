import React from 'react';
import Montenegro_ from './../Icons/montenegro.svg';
const Montenegro = (props) => {
  return (
    <img src={Montenegro_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Montenegro;
