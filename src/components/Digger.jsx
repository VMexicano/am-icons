import React from 'react';
import Digger_ from './../Icons/digger.svg';
const Digger = (props) => {
  return (
    <img src={Digger_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Digger;
