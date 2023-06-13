import React from 'react';
import Bug_ from './../Icons/bug.svg';
const Bug = (props) => {
  return (
    <img src={Bug_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Bug;
