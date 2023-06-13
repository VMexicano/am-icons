import React from 'react';
import Coffee_ from './../Icons/coffee.svg';
const Coffee = (props) => {
  return (
    <img src={Coffee_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Coffee;
