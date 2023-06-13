import React from 'react';
import Togo_ from './../Icons/togo.svg';
const Togo = (props) => {
  return (
    <img src={Togo_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Togo;
