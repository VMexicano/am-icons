import React from 'react';
import Hamburger_ from './../Icons/hamburger.svg';
const Hamburger = (props) => {
  return (
    <img src={Hamburger_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Hamburger;
