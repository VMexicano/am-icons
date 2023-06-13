import React from 'react';
import Nuts_ from './../Icons/nuts.svg';
const Nuts = (props) => {
  return (
    <img src={Nuts_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Nuts;
