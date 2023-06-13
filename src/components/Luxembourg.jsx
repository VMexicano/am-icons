import React from 'react';
import Luxembourg_ from './../Icons/luxembourg.svg';
const Luxembourg = (props) => {
  return (
    <img src={Luxembourg_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Luxembourg;
