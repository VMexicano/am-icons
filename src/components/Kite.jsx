import React from 'react';
import Kite_ from './../Icons/kite.svg';
const Kite = (props) => {
  return (
    <img src={Kite_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Kite;
