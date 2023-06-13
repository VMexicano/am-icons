import React from 'react';
import Legal_ from './../Icons/legal.svg';
const Legal = (props) => {
  return (
    <img src={Legal_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Legal;
