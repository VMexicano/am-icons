import React from 'react';
import Sandals_ from './../Icons/sandals.svg';
const Sandals = (props) => {
  return (
    <img src={Sandals_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Sandals;
