import React from 'react';
import Kindey_ from './../Icons/kindey.svg';
const Kindey = (props) => {
  return (
    <img src={Kindey_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Kindey;
