import React from 'react';
import SmileyFaceHappy_ from './../Icons/smileyFaceHappy.svg';
const SmileyFaceHappy = (props) => {
  return (
    <img src={SmileyFaceHappy_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SmileyFaceHappy;
