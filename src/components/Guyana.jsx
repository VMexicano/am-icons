import React from 'react';
import Guyana_ from './../Icons/guyana.svg';
const Guyana = (props) => {
  return (
    <img src={Guyana_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Guyana;
