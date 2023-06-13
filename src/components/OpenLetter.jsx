import React from 'react';
import OpenLetter_ from './../Icons/openLetter.svg';
const OpenLetter = (props) => {
  return (
    <img src={OpenLetter_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default OpenLetter;
