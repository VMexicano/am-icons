import React from 'react';
import Hamburger2_ from './../Icons/hamburger2.svg';
const Hamburger2 = (props) => {
  return (
    <img src={Hamburger2_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Hamburger2;
