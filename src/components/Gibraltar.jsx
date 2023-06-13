import React from 'react';
import Gibraltar_ from './../Icons/gibraltar.svg';
const Gibraltar = (props) => {
  return (
    <img src={Gibraltar_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Gibraltar;
