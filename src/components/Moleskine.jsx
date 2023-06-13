import React from 'react';
import Moleskine_ from './../Icons/moleskine.svg';
const Moleskine = (props) => {
  return (
    <img src={Moleskine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Moleskine;
