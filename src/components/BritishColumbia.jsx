import React from 'react';
import BritishColumbia_ from './../Icons/britishColumbia.svg';
const BritishColumbia = (props) => {
  return (
    <img src={BritishColumbia_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BritishColumbia;
