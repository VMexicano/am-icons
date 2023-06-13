import React from 'react';
import Snack_ from './../Icons/snack.svg';
const Snack = (props) => {
  return (
    <img src={Snack_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Snack;
