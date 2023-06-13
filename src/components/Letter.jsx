import React from 'react';
import Letter_ from './../Icons/letter.svg';
const Letter = (props) => {
  return (
    <img src={Letter_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Letter;
