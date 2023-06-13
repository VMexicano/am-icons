import React from 'react';
import Stroller_ from './../Icons/stroller.svg';
const Stroller = (props) => {
  return (
    <img src={Stroller_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Stroller;
